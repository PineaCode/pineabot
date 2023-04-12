import type { TTools } from '$/concord/typing.ts'
import type { TApiOpenAI } from '$/types/apis.type.ts'

export async function justChating({ client, request }: TTools) {
	setInterval(async () => {
		const CHANNEL_ID = client.envs.CHANNEL_ID_CHAT
		const [messages] = await client.message.read([CHANNEL_ID], 10)
		if (!messages) return

		// Preparar lista de comentarios para enviar a chatgpt
		const commentList: string[] = []
		const PREFIX_BOT = '_'
		for (let i = 0; i < messages.length; i++) {
			const msg = messages[i]

			if (msg.author.username === 'anonimusXD' && msg.type === 0 && msg.content.startsWith(PREFIX_BOT)) break

			if (
				// Descartar los mensajes que pertenecen a los bot
				!msg.author.bot &&
				// Descartar los comentarios que contengan menciones
				!msg.mentions.length &&
				// Descartar los mensajes que no sean de tipo texto
				msg.type === 0 &&
				// Descartar los mesanjes muy cortos
				msg.content.length > 10 &&
				// Descartar mensajes que solo contengan emojis
				!new RegExp(/\<\:.+\>$/).test(msg.content) &&
				// Descartar los comandos hacia los bots
				new RegExp(/^(\¡|\$|\&|\%|\/|\?|\!)*/).test(msg.content[0]) // TODO: mejorar este regex
			) {
				commentList.push(msg.content)
			}
		}

		if (commentList.length > 2) {
			const comments = commentList.filter((_comment: string, i: number) => i < 4)
			const strComments = comments.map((comment: string) => `- "${comment.substring(0, 150)}"`).join('\n')
			const { OPENAI_URL, OPENAI_API_KEY } = client.envs

			const response = await request<TApiOpenAI['completions']>(OPENAI_URL + '/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${OPENAI_API_KEY}`,
				},
				body: JSON.stringify({
					model: 'gpt-3.5-turbo-0301',
					messages: [
						{
							role: 'user',
							content: `
A continuacion se muestran algunos comentarios de usuarios en un servidor de discord:
${strComments}
Genera un texto corto de 30 palabras respecto a los temas tratados en esos comentarios para charlar o conversar.
El texto debe parecerse a un comentario de un usuario más en el servidor, debe ser informativo con datos que no se hayan comentado antes.`,
						},
					],
					temperature: 0.7,
				}),
			})

			if (response) {
				const { content } = response.choices[0].message
				await client.message.send([CHANNEL_ID], PREFIX_BOT + content)
			}
		}
	}, 1000 * 60 * 60)
}
