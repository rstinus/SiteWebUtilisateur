import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const teamName = body.teamName?.trim();
  const prefix = body.prefix?.trim().toUpperCase();
  const players = body.players?.map((p: string) => p.trim()).filter((n: string) => n !== "");
  const discord = body.discord?.trim();

  if (!teamName || !prefix || !players || players.length === 0 || !discord) {
    throw createError({ statusCode: 400, statusMessage: 'Champs manquants.' });
  }

  const teamRegex = /['\{\(\[|`@\]\)\}=~&# ]/g;
  const parsedTeamName = teamName.replace(teamRegex, '');

  if (parsedTeamName.length > 20 || prefix.length > 3 || players.length > 5) {
     throw createError({ statusCode: 400, statusMessage: 'Données hors limites.' });
  }
  
  const mcRegex = /^\w{3,16}$/;
  if (!players.every((name: string) => mcRegex.test(name)) || new Set(players).size !== players.length) {
    throw createError({ statusCode: 400, statusMessage: 'Pseudos invalides ou doublons.' });
  }

  const duplicateTeam = await prisma.team_inscription.findFirst({
    where: { OR: [{ nomTeam: parsedTeamName }, { prefixTeam: prefix }] }
  });
  if (duplicateTeam) throw createError({ statusCode: 409, statusMessage: 'Team ou Préfixe déjà utilisé.' });

  const duplicatePlayer = await prisma.player_inscription.findFirst({
    where: { pseudoPlayer: { in: players } }
  });
  if (duplicatePlayer) throw createError({ statusCode: 409, statusMessage: 'Au moins un des pseudos est déjà utilisé.' });

  try {
    const playersData = await Promise.all(
      players.map(async (name: string, index: number) => {
        const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        if (!res.ok) throw new Error(`Joueur "${name}" introuvable`);
        
        const data: any = await res.json();
        return {
          pseudoPlayer: data.name,
          uuidPlayer: data.id.replace(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/, '$1-$2-$3-$4-$5'),
          isOwner: index === 0 ? "1" : "0",
          pseudoDiscord: index === 0 ? discord : null
        };
      })
    );

    console.log("Nom d'origine:", teamName);
    console.log("Nom qui sera en BD:", parsedTeamName);

    const result = await prisma.$transaction(async (tx) => {
      
      const teamInsc = await tx.team_inscription.create({
        data: {
          nomTeam: parsedTeamName,
          prefixTeam: body.prefix.toUpperCase(),
          player_inscription: {
            createMany:  {
              data: playersData
            }
          }
        }
      });

      const teamAttente = await tx.team_attente.create({
        data: {
          nomTeam: parsedTeamName,
          prefixTeam: body.prefix.toUpperCase(),
          player_attente: {
            createMany:  {
              data: playersData
            }
          }
        }
      });

      return { teamInsc, teamAttente };
    });

    return { success: true, data: result };

  } catch (error: any) {
    if (error.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'Un des joueurs, le nom de team ou le préfixe est déjà utilisé.' });
    }
    throw createError({ statusCode: 500, statusMessage: error.message || 'Erreur serveur.' });
  }
});