import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const teamName = query.team as string

    if (!teamName) return []

    const team = await prisma.team.findUnique({
      where: { nomTeam: teamName },
      select: { idTeam: true }
    })

    if (!team) return []

    const players = await prisma.customplayer.findMany({
      where: { idTeam: team.idTeam },
      select: {
        uuidPlayer: true,
        name: true
      }
    })

    if (players.length === 0) return []

    return players.map(player => ({
      uuidPlayer: player.uuidPlayer,
      name: player.name,
    }))
    
  } catch (error) {
    console.error('Erreur API Players:', error)
    return []
  }
})