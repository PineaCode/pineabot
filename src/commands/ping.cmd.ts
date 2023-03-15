import { Client } from '$/concord/Client.ts'
import { TEnvs } from '$/concord/typing.ts'

interface IUtil {
	client: Client
	envs: TEnvs
}

export async function ping(data: TMessageCreateData, { client }: IUtil) {
	const dateMessage = new Date(data.timestamp).getTime()
	const dateNow = Date.now()
	const ping = dateNow - dateMessage

	await client.sendMessage([data.channel_id], `🛰️ Pong - duración: **${ping} ms**`)
}
