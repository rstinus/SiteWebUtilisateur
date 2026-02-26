// server/utils/loreLogic.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function updateTeamLoreProgress(nomTeam: string, idQuest: number) {
  // A. Calculer les scores actuels (ta requête SQL du début)
  const stats: any[] = await prisma.$queryRaw`
    SELECT
      COUNT(DISTINCT CASE WHEN too.termine = 1 THEN tt.idTete END) AS valid_count,
      COUNT(DISTINCT tt.idTete) AS total_count
    FROM Objectif ob
    INNER JOIN TeamObjectif too ON ob.idObjectif = too.idObjectif
    INNER JOIN Tache t ON too.idObjectif = t.idObjectif
    INNER JOIN ConditionObjectif co ON co.idTache = t.idTache
    INNER JOIN Tete tt ON tt.idTete = co.valeurCondition
    INNER JOIN team ttt ON ttt.idTeam = too.idTeam
    WHERE ob.idQuest = ${idQuest} AND ttt.nomTeam = ${nomTeam} AND tt.lore = 1
  `;

  const { valid_count, total_count } = stats[0];
  const percent =
    total_count > 0 ? (Number(valid_count) / Number(total_count)) * 100 : 0;

  // B. Déterminer le palier actuel
  let currentPallier = 0;
  let bitmaskValue = 0;
  if (percent >= 100) {
    currentPallier = 100;
    bitmaskValue = 8;
  } else if (percent >= 75) {
    currentPallier = 75;
    bitmaskValue = 4;
  } else if (percent >= 50) {
    currentPallier = 50;
    bitmaskValue = 2;
  } else if (percent >= 25) {
    currentPallier = 25;
    bitmaskValue = 1;
  }

  if (currentPallier === 0) return; // Rien à faire

  // C. Vérifier si ce palier a déjà été envoyé
  // On récupère l'idTeam numérique pour la table de progression
  const teamData = await prisma.team.findFirst({ where: { nomTeam: nomTeam } });
  if (!teamData) return;

  const progress = await prisma.cde_team_lore_progress.findUnique({
    where: { idTeam_idQuest: { idTeam: teamData.idTeam, idQuest } },
  });

  // Si le bit du palier n'est pas dans le mask, on déclenche la notif !
  if (!progress || (progress.pallier_sent_mask & bitmaskValue) === 0) {
    // 1. Générer le pattern (ton facteur 1.6)
    const secretWord = teamData.mot || "CHRONOS";
    const pattern = generateMaskedWord(secretWord); // On va créer cette fonction

    // 2. Historiser dans cde_team_lore_notif
    await prisma.cde_team_lore_notif.create({
      data: {
        idTeam: teamData.idTeam,
        idQuest,
        pallier: currentPallier,
        valid_count: Number(valid_count),
        total_count: Number(total_count),
        percent,
        word_snapshot: secretWord,
        pattern_sent: pattern,
      },
    });

    // 3. Mettre à jour l'état (le bitmask)
    await prisma.cde_team_lore_progress.upsert({
      where: { idTeam_idQuest: { idTeam: teamData.idTeam, idQuest } },
      update: {
        last_percent: percent,
        last_pallier: currentPallier,
        pallier_sent_mask: (progress?.pallier_sent_mask || 0) | bitmaskValue,
        last_notif_at: new Date(),
      },
      create: {
        idTeam: teamData.idTeam,
        idQuest,
        last_percent: percent,
        last_pallier: currentPallier,
        pallier_sent_mask: bitmaskValue,
        last_notif_at: new Date(),
      },
    });
  }
}

function generateMaskedWord(word: string) {
  const chars = word.split("");
  const revealedCount = Math.max(1, Math.round(word.length / 1.6));
  const result = new Array(word.length).fill("_");

  for (let i = 0; i < revealedCount; i++) {
    const idx = Math.floor(Math.random() * word.length);
    result[idx] = chars[idx];
  }
  return result.join(" ");
}
