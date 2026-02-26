import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const startParam = query.start as string;
  const typeRequested = query.type as string;

  let idFilter = undefined;
  if (typeRequested && typeRequested !== 'Tous') {
    const globalEvent = await prisma.event_global.findFirst({
      where: { typeEventGlobal: typeRequested }
    });
    idFilter = globalEvent ? globalEvent.idEventGlobal : -1;
  }

  const events = await prisma.event_info.findMany({
    where: {
      OR: [
        {
          dateDebutEvent: {
            gte: new Date(`${startParam}T00:00:00`),
          }
        },
        {
          dateFinEvent: {
            gte: new Date(`${startParam}T23:59:59`),
          }
        }
      ],
      idEventGlobal: idFilter,
    },
    include: {
      event_global: true 
    }
  });

  return events.map(e => {
    const start = new Date(e.dateDebutEvent);
    return {
      id: e.idEvent,
      title: e.nameEvent,
      category: e.event_global?.typeEventGlobal || "Inconnu", 
      fullStartDate: e.dateDebutEvent, 
      fullEndDate: e.dateFinEvent,
      day: `${String(start.getDate()).padStart(2, '0')}/${String(start.getMonth() + 1).padStart(2, '0')}`,
      colorClass: "bg-blue-50 text-blue-800 border-blue-500"
    };
  });
});