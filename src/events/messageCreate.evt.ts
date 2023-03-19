import { TAction } from '$/concord/typing.ts'
import { MADURO_NAME_ALIAS } from '$/entities/consts.ts'

export const messageCreate: TAction = async (data, { client }) => {
	const message = data.content.toLowerCase()
	const channelId = data.channel_id

	// Maduro
	if (MADURO_NAME_ALIAS.includes(message)) {
		await client.sendMessage([channelId], 'Maduro coño e\' tu madre! 🤬')
	}

	// UwU
	if (message.includes('uwu')) {
		await client.sendMessage([channelId], 'OwO 😳')
	}

	// Palta
	if (message.includes('palta')) {
		await client.sendMessage([channelId], 'Se dice "aguacate". Saludos.')
	}
}
