import { TTools } from '$/concord/typing.ts'

export function justChating({ client, request }: TTools): void {
	setInterval(async () => {
		const CHANNEL_ID = client.envs.CHANNEL_ID_CHAT
		let [messages] = await client.message.read([CHANNEL_ID], 10)
		const isPineaCode = messages.find((msg) => msg.author.username === 'anonimusXD')

		if (!isPineaCode) {
			messages = messages.filter((msg) => {
				return (
					// Filtrar los mensajes que pertenecen a los bot
					!msg.author['bot'] &&
					// Filtrar los comentarios que contengan menciones
					!msg.mentions.length &&
					// Filtrar los mensajes que no sean de tipo texto
					msg.type === 0 &&
					// Filtrar los mesanjes muy cortos
					msg.content.length > 10 &&
					// Filtrar los comandos hacia los bots
					new RegExp(/[a-zA-Z0-9]/).test(msg.content[0])
				)
			})

			if (messages.length) {
				const comments = messages.map((msg) => `- "${msg.content.substring(0, 150)}"`).join('\n')
				const { OPENAI_URL, OPENAI_API_KEY } = client.envs

				const response = await request<TResponseApiOpenAI>(OPENAI_URL + '/v1/chat/completions', {
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
A continuacion se muestran algunos comentarios de usuarios:
${comments}
Genera un texto corto de 45 palabras respecto a los temas tratados en esos comentarios para charlar o conversar.
El texto debe ser un comentario de un usuario mas, debe ser informativo con datos que no se hayan comentado antes.`,
							},
						],
						temperature: 0.7,
					}),
				})

				const { content } = response.choices[0].message
				await client.message.send([CHANNEL_ID], content)
			}
		}
	}, 1000 * 60 * 60)
}
