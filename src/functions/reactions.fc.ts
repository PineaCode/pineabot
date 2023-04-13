import { UtilService } from '$/services/Util.service.ts'
import { WORDS_HOT, WORDS_MADURO } from '$/entities/consts.ts'
import { Client } from '$/concord/Client.ts'

export async function reaction(channelId: string, message: string, client: Client): Promise<void> {
	// Maduro
	if (UtilService.searchWords(message, WORDS_MADURO)) {
		await client.message.send([channelId], 'Maduro coño e\' tu madre! 🤬')
	}

	// uwu | owo
	if (message.includes('uwu') || message.includes('owo')) {
		await client.message.send(
			[channelId],
			message.includes('uwu') ? '<:uwu:1095899686944116818>' : '<:emocion:1066224404066996365>',
		)
	}

	// awa
	if (message.includes('awa')) {
		await client.message.send([channelId], 'awa de uwu')
	}

	// Nice
	if (message.includes('nice')) {
		await client.message.send([channelId], '<:ojito:1065824877786964008>')
	}

	// 13 TODO: realizar un respuesta directa para este mensaje
	// if (message.includes('13')) {
	// 	await client.message.send([channelId], '')
	// }

	// Palta
	if (message.includes('palta')) {
		await client.message.send([channelId], 'Se dice "aguacate". Saludos')
	}

	// HOT
	if (UtilService.searchWords(message, WORDS_HOT)) {
		await client.message.send([channelId], '<:yameteee:1083538327761858610>')
	}
}
