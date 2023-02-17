import { ConfigService } from '$/services/Config.service.ts'
import { GatewayService } from '$/services/Gateway.service.ts'
import { MessageService } from '$/concord/Message.service.ts'

try {
	const config = new ConfigService()
	await config.load()
	const gateway = new GatewayService()
	const message = new MessageService()

	reactionMaduro(config, gateway, message)
} catch (error) {
	console.error('APP_ERROR: ', (error as Error).message)
}

function reactionMaduro(config: ConfigService, gateway: GatewayService, message: MessageService) {
	const serverId = config.get('ID_SERVER') || ''
	const channelIdListeningList: string[] = (config.get('ID_CHANNEL_LISTENING_LIST') || '').split(',')
	const channelIdResponse: string = config.get('ID_CHANNEL_RESPONSE') || ''

	gateway.messageCreate(serverId, channelIdListeningList, async (inputMessage) => {
		const maduroAliasList = [
			'Maduro',
			'maduro',
			'madurito',
			'Nicolas',
			'Nicolas Maduro',
			'nicolas maduro',
			'Nicolas maduro',
			'nicolas Maduro',
		]

		if (maduroAliasList.includes(inputMessage)) {
			await message.create([channelIdResponse], 'Maduro coño e\' tu madre! 🤬')
		}
	})
}
