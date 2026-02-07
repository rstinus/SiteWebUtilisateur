// server/api/login.post.ts
import { prisma } from '../utils/prisma'

const formatUUID = (uuid: string) => {
  return uuid.replace(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/, '$1-$2-$3-$4-$5')
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const username = body.username?.trim() // On enlève les espaces inutiles

  if (!username) throw createError({ statusCode: 400, statusMessage: 'Pseudo requis' })

  try {
    console.log(`Recherche de l'UUID pour : ${username}...`)
    
    // On appelle Mojang
    const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`)
    
    if (response.status === 404) {
      console.error("Réponse Mojang : Ce joueur n'existe pas (Compte Premium requis).")
      throw createError({ statusCode: 404, statusMessage: "Ce compte Minecraft n'existe pas." })
    }

    if (!response.ok) {
      console.error(`Erreur API Mojang : ${response.status}`)
      throw createError({ statusCode: 503, statusMessage: "Service Mojang indisponible." })
    }

    const data: any = await response.json()
    const dashedUUID = formatUUID(data.id)
    console.log(`UUID trouvé : ${dashedUUID}`)

    // Recherche en DB
    const player = await prisma.hz_team_players.findFirst({
      where: { player_uuid: dashedUUID }
    })

    if (!player) {
      console.warn(`Joueur ${username} (${dashedUUID}) non trouvé dans hz_team_players.`)
      throw createError({ statusCode: 401, statusMessage: "Tu n'es pas inscrit dans une equipe." })
    }

    return {
      success: true,
      player: {
        uuid: dashedUUID,
        team: player.team_name,
        name: data.name
      }
    }

  } catch (error: any) {
    // On log l'erreur complète dans le terminal pour toi
    console.error("DÉTAIL ERREUR LOGIN :", error)
    
    throw createError({ 
      statusCode: error.statusCode || 500, 
      statusMessage: error.statusMessage || "Erreur de connexion" 
    })
  }
})