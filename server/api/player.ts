// server/api/scores.ts
import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    // 1. Récupération de l'identifiant de l'équipe (ex: passé en paramètre ?id=...)
    const query = getQuery(event)
    const teamId = "MineTeam"

    // 2. Requête Prisma
    const players = await prisma.hz_team_players.findMany({
      where: {
        team_name: teamId 
      },
      select: {
        player_uuid: true,
        team_name: true,
      },
    })
    
    return players
  } catch (error) {
    console.error('Erreur API Scores (hz_team_players):', error)
    return [] 
  }
})