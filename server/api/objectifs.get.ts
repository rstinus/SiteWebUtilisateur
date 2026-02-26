import { PrismaClient } from "@prisma/client";

// On instancie Prisma à l'extérieur pour éviter de créer une nouvelle connexion à chaque appel
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event); // C'est le NOM de l'équipe d'après ton frontend
  const idQuest = 20;

  // Validation : idTeam ne doit pas être vide
  if (!query.nomTeam || typeof query.nomTeam !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: "Le nom de l'équipe est manquant ou invalide.",
    });
  }

  const nomTeam = query.nomTeam;  

  try {
    // Note : On utilise queryRaw pour les requêtes complexes.
    // Attention : Prisma protège contre les injections SQL avec les template literals `${}`.
    updateTeamLoreProgress(nomTeam, idQuest).catch(console.error);

    const objectifs = await prisma.$queryRaw`
      SELECT DISTINCT
          ob.nomObjectif,
          too.progres,
          too.termine,
          co.valeurCondition,
          tt.lore
      FROM Objectif ob
      INNER JOIN TeamObjectif too ON ob.idObjectif = too.idObjectif
      INNER JOIN Tache t ON too.idObjectif = t.idObjectif
      INNER JOIN ConditionObjectif co ON co.idTache = t.idTache
      INNER JOIN Tete tt ON tt.idTete = co.valeurCondition
      INNER JOIN team ttt ON ttt.idTeam = too.idTeam
      WHERE ob.idQuest = ${idQuest} AND ttt.nomTeam = ${nomTeam}
    `;
    // Note : J'ai changé l'ORDER BY car lvlObjectif n'était pas dans ton SELECT,
    // ce qui peut poser problème sur certains moteurs SQL en DISTINCT.

    return {
      success: true,
      data: objectifs,
    };
  } catch (error) {
    console.error(error); // Toujours loguer l'erreur côté serveur
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de la récupération des objectifs.",
    });
  }
});
