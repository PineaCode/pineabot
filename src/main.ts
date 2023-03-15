import { ConfigService } from '$/services/Config.service.ts'
import { Client } from '$/concord/Client.ts'

try {
	// Load environment variables of project
	const config = new ConfigService()
	await config.load()

	// Create client concord
	const client = new Client()
	await client.start()
} catch (error) {
	console.error('APP_ERROR: ', (error as Error).message)
}
