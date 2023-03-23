import { MADURO_NAME_ALIAS, MESSAGES_HOT } from '$/entities/consts.ts'
import { Client } from '$/concord/Client.ts'

export async function reaction(channelId: string, message: string, client: Client): Promise<void> {
	// Maduro
	if (MADURO_NAME_ALIAS.includes(message)) {
		await client.message.send([channelId], 'Maduro coño e\' tu madre! 🤬')
	}

	// UwU
	if (message.includes('uwu')) {
		await client.message.send([channelId], 'OwO 😳')
	}

	// Palta
	if (message.includes('palta')) {
		await client.message.send([channelId], 'Se dice "aguacate". Saludos.')
	}

	// HOT
	if (MESSAGES_HOT.includes(message)) {
		await client.message.send([channelId], '<:yameteee:1083538327761858610>')
	}
}
