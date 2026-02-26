import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const idHead = String(query.id);
  // SURTOUT PAS de parseInt ici si query.idTeam est "MineTeam"
  const teamName = String(query.idTeam);

  console.log(`[API Head] Verif pour Team: ${teamName}, HeadID: ${idHead}`);

  try {
    const result: any[] = await prisma.$queryRaw`
      SELECT ob.nomObjectif, too.termine
      FROM Objectif ob
      INNER JOIN TeamObjectif too ON ob.idObjectif = too.idObjectif
      INNER JOIN Tache t ON too.idObjectif = t.idObjectif
      INNER JOIN ConditionObjectif co ON co.idTache = t.idTache
      INNER JOIN team tt ON tt.idTeam = too.idTeam
      WHERE co.valeurCondition = ${idHead}
      AND tt.nomTeam = ${teamName} -- On compare le texte "MineTeam" avec le nom en DB
      LIMIT 1
    `;

    const head = result[0];

    if (!head || (head.termine !== 1 && head.termine !== true)) {
      throw createError({
        statusCode: 403,
        statusMessage: "CETTE TETE N'A PAS ENCORE ETE TROUVEE.",
      });
    }

    return { success: true, data: head };
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Erreur interne",
    });
  }
});
