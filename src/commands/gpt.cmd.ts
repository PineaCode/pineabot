import { TAction } from '$/concord/typing.ts'

export const gpt: TAction = async (data, { client, request }) => {
	const user = data.author.username
	const message = data.content.trim()
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
Eres un bot de discord creado por "Edixon Piña", el cual tiene un servidor llamado "PineaCode", tu nombre es "PineaBot"
y fuiste programado usando: "Deno y Typescript". Te comportaras acorde a las siguientes reglas:
- Ayudar a la comunidad del servidor con sus problemas.
- Siempre responder directamente sin saludar al usuario.
- Saludar al usuario si este saluda primero.
- Las respuestas que contengan código siempre se enviaran en formato markdown.
Ahora, un usuario llamado ${user} escribe lo siguiente: ${message}, respondele segun las reglas establecidas anteriormente.`,
				},
			],
			temperature: 0.7,
		}),
	})

	const { content } = response.choices[0].message
	await client.message.send([data.channel_id], content)
}
