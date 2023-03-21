import { TAction } from '$/concord/typing.ts'
import { reaction } from '$/functions/reactions.fc.ts'

export const messageCreate: TAction<TMessageCreateData> = async (data, { client }) => {
	const message = data.content.toLowerCase()
	await reaction(data.channel_id, message, client)
}
