import { ConfigService } from '$/services/Config.service.ts'
import { Client } from '$/concord/Client.ts'
import { MADURO_NAME_ALIAS } from '$/entities/consts.ts'
import { Events } from '$/concord/typing.ts'

try {
	const config = new ConfigService()
	await config.load()

	// Create client concord
	const client = new Client()
	await client.start()

	reactionMaduro(config, client)
} catch (error) {
	console.error('APP_ERROR: ', (error as Error).message)
}

function reactionMaduro(config: ConfigService, client: Client) {
	const channelIdResponse: string = config.get('ID_CHANNEL_RESPONSE') || ''

	client.on(Events.MessageCreate, async (data: TMessageCreateData) => {
		if (MADURO_NAME_ALIAS.includes(data.content)) {
			await client.sendMessage([channelIdResponse], 'Maduro coño e\' tu madre! 🤬')
		}
	})
}
