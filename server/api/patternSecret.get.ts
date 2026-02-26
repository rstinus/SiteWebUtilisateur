import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const team = parseInt(query.idTeam as string);

    if (isNaN(team)) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid idTeam parameter",
        });
    }

    const pattern = await prisma.cde_team_lore_notif.findFirst({
        where: { idTeam: team },
        select: { pattern_sent: true },
        orderBy: { idTeam: 'desc' }
    });

    return {
        pattern_sent: pattern ? pattern.pattern_sent : "_ _ _ _ _"
    };
    });