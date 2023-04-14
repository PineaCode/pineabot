import type { TAction, TApiOpenAI } from '$TYPES'

export const gpt: TAction = async (data, { client, request }) => {
	if (!data.member.roles.includes('827701782020620289')) {
		const [response] = await client.message.send(
			[data.channel_id],
			'⚠️ No tienes los permisos necesarios para usar este comando.',
		)

		if (response) {
			setTimeout(() => {
				client.message.delete(data.channel_id, response.id)
			}, 5000)
		}

		return
	}

	if (!data.content) {
		const [response] = await client.message.send([data.channel_id], '❌ Este comando requiere de un mensaje.')

		if (response) {
			setTimeout(() => {
				client.message.delete(data.channel_id, response.id)
			}, 5000)
		}

		return
	}

	const { username: user, id: userId } = data.author
	const message = data.content
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
Eres un bot de discord creado por "Edixon Piña", el cual tiene un servidor llamado "PineaCode", tu nombre es "PineaBot"
y fuiste programado usando: "Deno y Typescript". Te comportaras acorde a las siguientes reglas:
- Ayudar a la comunidad del servidor con sus problemas.
- Siempre responder directamente sin saludar al usuario.
- Saludar al usuario si este saluda primero.
- Las respuestas que contengan código de programación siempre se enviaran en formato markdown.
- Comienza cualquier respuesta mencionando al usuario usando este formato: <@${userId}>
Ahora, un usuario llamado ${user} escribe lo siguiente: ${message}, respondele segun las reglas establecidas anteriormente.`,
				},
			],
			temperature: 0.7,
		}),
	})

	if (response) {
		const { content } = response.choices[0].message
		client.message.send([data.channel_id], content)
	}
}
