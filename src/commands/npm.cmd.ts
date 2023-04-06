import type { TAction } from '$/concord/typing.ts'
import type { TApiNPM } from '$/types/apis.type.ts'

export const npm: TAction = async (data, { client, request }) => {
	const { NPM_URL, PREFIX } = client.envs
	const channelId = [data.channel_id]
	const pkgName = data.content.toLowerCase()

	if (!pkgName) {
		client.message.send(
			channelId,
			`❌ Este comando requiere de un parametro.\nEjemplo: \`${PREFIX} express\``,
		)
		return
	}

	const packageNpm = await request<TApiNPM>(`${NPM_URL}/${pkgName}`, {
		method: 'GET',
	})

	if (!packageNpm) {
		client.message.send(channelId, '🔍 No se ha encontrado el paquete.')
		return
	}

	// TODO: crear un mensaje embed mas elaborado para enviar como respuesta
	client.message.send(channelId, `https://www.npmjs.com/package/${pkgName}`)
}