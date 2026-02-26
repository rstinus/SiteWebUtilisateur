 import { prisma } from '../utils/prisma'


export default defineEventHandler(async (event) => {

  try {

    const query = getQuery(event)
    const teamName = query.team as string

    const score = await prisma.hz_teams.findFirst({
        where: {
            team_name: teamName
        },
        select: {
            score: true,
        },
    })

    return score

  } catch (error) {
    console.error("DÉTAIL ERREUR BD :", error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur de connexion à la base de données',
    })

  }

}) 