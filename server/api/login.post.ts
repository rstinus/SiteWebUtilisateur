// server/api/login.post.ts
import { prisma } from '../utils/prisma'

const formatUUID = (uuid: string) => {
  return uuid.replace(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/, '$1-$2-$3-$4-$5')
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const username = body.username?.trim()

  if (!username) throw createError({ statusCode: 400, statusMessage: 'Pseudo requis' })

  try {
    let playerUUID: string | null = null
    let officialName: string = username

    const citePlayer = await prisma.customplayer.findFirst({
      where: { name: username }
    })

    if (citePlayer) {
      playerUUID = citePlayer.uuidPlayer
      officialName = citePlayer.name || username
    } else {
      const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`)
      if (!response.ok) {
        throw createError({ statusCode: 404, statusMessage: "Compte Minecraft introuvable" })
      }
      const data: any = await response.json()
      playerUUID = formatUUID(data.id)
      officialName = data.name
    }

    const horizonPlayer = await prisma.hz_team_players.findFirst({
      where: { player_uuid: playerUUID! }
    })

    if (!horizonPlayer) {
      throw createError({ 
        statusCode: 401, 
        statusMessage: "Tu n'es pas inscrit dans une équipe sur Horizon." 
      })
    }

    const citeTeam = await prisma.team.findUnique({
      where: { nomTeam: horizonPlayer.team_name }
    })

    if (!citeTeam) {
      throw createError({ 
        statusCode: 500, 
        statusMessage: "Équipe Horizon non configurée dans la base Cité." 
      })
    }

    await prisma.customplayer.upsert({
      where: {
        uuidPlayer: playerUUID!
      },
      update: {
        name: officialName,
        idTeam: citeTeam.idTeam
      },
      create: {
        uuidPlayer: playerUUID!,
        name: officialName,
        idTeam: citeTeam.idTeam
      }
    })

    return {
      success: true,
      player: {
        uuid: playerUUID,
        name: officialName,
        team: horizonPlayer.team_name
      }
    }

  } catch (error: any) {
    throw createError({ 
      statusCode: error.statusCode || 500, 
      statusMessage: error.statusMessage || "Erreur lors de la connexion" 
    })
  }
})