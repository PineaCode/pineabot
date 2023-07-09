import type { TApiPlatzi, TTools } from '$TYPES'
import { EventService } from '$/services/Event.service.ts'
import { PlatziService } from '$/services/Platzi.service.ts'

export function blogPlatzi({ client }: TTools): void {
	const TIME_UPDATE_POSTS = (1000 * 60 * 60) * 2 // 2 horas
	const CHANNEL_ID = client.envs.CHANNEL_ID_PLATZI
	const platzi = new PlatziService()

	const updatePosts = async () => {
		const posts = await platzi.getLastPosts()
		const [messages] = await client.message.read([CHANNEL_ID], 10)
		const postslink: string[] = messages?.map((message) => message.content.split('\n')[1]) || [] // Obtener solo los links
		let postsToSend: TApiPlatzi['response'] = []

		if (postslink.length) {
			for (let i = 0; i < posts.length; i++) {
				const post = posts[i]
				// Descartar los posts que no se hayan publicado el día de hoy
				if (!post.relative_time.includes('horas')) return
				// Descartar los posts que ya se hayan enviado al canal del servidor
				const postFound = postslink.find((link) => link === post.link)
				if (postFound) return

				postsToSend.push(post)
			}
		} else postsToSend = posts

		if (!postsToSend.length) return

		const postsMessage = postsToSend.map((post) => {
			// deno-fmt-ignore
			return `
**${post.title}**
${post.link}`
		}).reverse() // Se aplica "reverse" para que el último mensaje enviado corresponda al último post creado

		postsMessage.map((postMessage, index) => {
			// Enviar los mensajes cada 2 segundos, por dos motivos:
			// - Para no violar el "ratelimit" de la api de discord
			// - Para dar tiempo que se genere la vista previa del link de cada post
			setTimeout(() => {
				client.message.send([CHANNEL_ID], postMessage)
			}, (index + 1) * 2000) // Ventana de 2 segundos
		})
	}

	updatePosts()
	const postsInterval = setInterval(updatePosts, TIME_UPDATE_POSTS)

	EventService.evt.addEventListener('reset', (_event) => {
		clearInterval(postsInterval)
	})
}
