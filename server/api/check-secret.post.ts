// server/api/check-secret.post.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { idTeam, guess } = body;

  if (!idTeam || !guess) {
    throw createError({
      statusCode: 400,
      statusMessage: "Paramètres manquants",
    });
  }

  try {
    // 1. Récupérer le vrai mot dans la table Team
    const team = await prisma.team.findFirst({
      where: { nomTeam: idTeam },
      select: { mot: true },
    });

    if (!team || !team.mot) {
      throw createError({
        statusCode: 404,
        statusMessage: "Équipe ou mot non trouvé",
      });
    }

    // 2. Comparaison (en majuscules pour éviter les erreurs bêtes)
    const isCorrect =
      team.mot.toUpperCase().trim() === guess.toUpperCase().trim();

    if (isCorrect) {
      // Optionnel : Tu peux ici marquer la quête comme réussie en DB
      return {
        success: true,
        message: "Bravo ! Vous avez trouvé le mot secret.",
      };
    } else {
      return { success: false, message: "Ce n'est pas le bon mot..." };
    }
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: "Erreur serveur" });
  }
});
