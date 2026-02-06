 import { prisma } from '../utils/prisma'


export default defineEventHandler(async (event) => {

  try {

    const ladder = await prisma.hz_shop_prices.findMany({
      take: 9,
      orderBy: { price: 'desc' }

    })

    return ladder

  } catch (error) {

    // Cela affichera l'erreur précise (ex: Access Denied, Timeout...) dans ton terminal

    console.error("DÉTAIL ERREUR BD :", error)

    throw createError({

      statusCode: 500,

      statusMessage: 'Erreur de connexion à la base de données',

    })

  }

}) 