import { ConfigService } from '$/services/Config.service.ts'
import { Client } from '$/concord/Client.ts'

try {
	// Cargar variables de entorno en el proyecto
	const config = new ConfigService()
	await config.load()

	// Crear cliente Concord
	const client = new Client()
	await client.start()
} catch (error) {
	console.error('APP_ERROR: ', (error as Error).message)
}
