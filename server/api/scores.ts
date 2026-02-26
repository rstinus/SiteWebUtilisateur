// server/api/scores.ts
import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const ladder = await prisma.hz_teams.findMany({
      select: {
        score: true,
        team_name: true,
      },
      orderBy: {
        score: 'desc'
      }
    })
    
    return ladder
  } catch (error) {
    console.error('Erreur API Scores (hz_teams):', error)
    return [] 
  }
})