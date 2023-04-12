import { UtilService } from '$/services/Util.service.ts'
import { WORDS_HOT, WORDS_MADURO } from '$/entities/consts.ts'
import { Client } from '$/concord/Client.ts'

export async function reaction(channelId: string, message: string, client: Client): Promise<void> {
	// Maduro
	if (UtilService.searchWords(message, WORDS_MADURO)) {
		await client.message.send([channelId], 'Maduro coño e\' tu madre! 🤬')
	}

	// UwU
	if (message.includes('uwu') || message.includes('owo')) {
		await client.message.send([channelId], 'OwO 😳')
	}

	// Palta
	if (message.includes('palta')) {
		await client.message.send([channelId], 'Se dice "aguacate". Saludos.')
	}

	// HOT
	if (UtilService.searchWords(message, WORDS_HOT)) {
		await client.message.send([channelId], '<:yameteee:1083538327761858610>')
	}
}
