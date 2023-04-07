import type { TAction } from '$/concord/typing.ts'
import type { TApiWikipedia } from '$/types/apis.type.ts'
import { UtilService } from '$/services/Util.service.ts'

export const wiki: TAction = async (data, { client, request }) => {
	const { WIKIPEDIA_URL, PREFIX } = client.envs
	const channelId = [data.channel_id]
	const term = data.content

	if (!term) {
		client.message.send(
			channelId,
			`❌ Este comando requiere de un parametro.\nEjemplo: \`${PREFIX}wiki discord\``,
		)
		return
	}

	const result = await request<TApiWikipedia['query']>(
		`${WIKIPEDIA_URL}/w/api.php?action=query&format=json&prop=extracts&generator=search&exchars=120&exlimit=max&explaintext=1&exintro=1&gsrsearch=${
			term.replace(/ /g, '_')
		}`,
	)

	if (result && result?.query?.pages) {
		for (const key in result.query.pages) {
			const page = result.query.pages[key]
			const title = UtilService.ignoreAcents(page.title)
			const regex = new RegExp(`^${term}$`, 'i')

			if (regex.test(title)) {
				const pageUrl = `https://es.wikipedia.org/wiki/${title.replace(/ /g, '_')}`
				client.message.send(channelId, pageUrl)
				return
			}
		}
	}

	client.message.send(channelId, 'No se ha encontrado un articulo.')
}
