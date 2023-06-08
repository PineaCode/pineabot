import type { TApiPlatzi, TTools } from '$TYPES'
import { EventService } from '$/services/Event.service.ts'
import { PlatziService } from '$/services/Platzi.service.ts'

export function blogPlatzi({ client }: TTools): void {
	const TIME_UPDATE_POSTS = (1000 * 60 * 60) * 4 // 4 horas
	const CHANNEL_ID = client.envs.CHANNEL_ID_PLATZI
	const platzi = new PlatziService()

	const postsInterval = setInterval(async () => {
		const posts = await platzi.getLastPosts()
		const [messages] = await client.message.read([CHANNEL_ID], 10)
		const postslink: string[] = messages?.map((message) => message.content.split('\n')[1]) || [] // Obtener solo los links
		let postsToSend: TApiPlatzi['response'] = []

		if (postslink.length) {
			// Filtrar los posts que ya se hayan enviado al canal
			for (let i = 0; i < posts.length; i++) {
				const post = posts[i]
				const postNotFound = !postslink.find((link) => link === post.link)
				if (postNotFound) postsToSend.push(post)
			}
		} else postsToSend = posts

		if (!postsToSend.length) return

		const postsMessage = postsToSend.map((post) => {
			// deno-fmt-ignore
			return `
${post.title}
(${post.likes || 'Sin'} Like${post.likes > 1 ? 's' : ''})  (${post.comments || 'Sin'} Comentario${post.comments > 1 ? 's' : ''})
${post.link}`
		})

		postsMessage.map((postMessage, index) => {
			// Enviar los mensajes cada 2 segundos, por dos motivos:
			// - Para no violar el "ratelimit" de la api de discord
			// - Para dar tiempo que se genere la vista previa del link de cada post
			setTimeout(() => {
				client.message.send([CHANNEL_ID], postMessage)
			}, (index + 1) * 2000) // Ventana de 2 segundos
		})
	}, TIME_UPDATE_POSTS)

	EventService.evt.addEventListener('reset', (_event) => {
		clearInterval(postsInterval)
	})
}
