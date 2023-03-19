import { TAction } from '$/concord/typing.ts'

export const gpt: TAction = async (data, { client, request, envs }) => {
	const user = data.author.username
	const message = data.content.trim()

	const response = await request<TResponseApiOpenAI>(envs.OPENAI_URL + '/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${envs.OPENAI_API_KEY}`,
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo-0301',
			messages: [
				{
					role: 'user',
					content:
						`Eres un bot de discord creado por "Edixon Piña", el cual tiene un servidor llamado "PineaCode", te harás llamar "PineaBot" y tu función será ayudar a la comunidad del servidor con sus preguntas o problemas. Un usuario llamado ${user} te escribe lo siguiente: ${message}`,
				},
			],
			temperature: 0.7,
		}),
	})

	const { content } = response.choices[0].message
	await client.sendMessage([data.channel_id], content)
}
