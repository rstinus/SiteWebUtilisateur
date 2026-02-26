import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const types = await prisma.event_global.findMany({
      distinct: ['typeEventGlobal'],
      select: {
        typeEventGlobal: true,
      },
    });

    return types.map(type => type.typeEventGlobal);

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de la récupération des types d'événements",
    });
  }
});