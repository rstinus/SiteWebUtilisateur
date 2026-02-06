// server/api/scores.ts
import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    // Récupère uniquement le champ 'score' pour toutes les équipes de la table hz_teams
    const ladder = await prisma.hz_teams.findMany({
      select: {
        score: true,
        team_name: true,
        // Tu voudras probablement aussi le nom de l'équipe pour savoir à qui appartient le score
        // team_name: true 
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