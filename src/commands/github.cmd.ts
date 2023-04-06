import type { TAction } from '$/concord/typing.ts'
import type { TApiGithub } from '$/types/apis.type.ts'

export const github: TAction = async (data, { client, request }) => {
	const { GITHUB_URL, PREFIX } = client.envs
	const channelId = [data.channel_id]
	const [ownerName, repoName] = data.content.toLowerCase().split(' ').filter((msg: string) => msg)

	if (!ownerName || !repoName) {
		client.message.send(
			channelId,
			`❌ Este comando requiere de dos parametros \`ownerName\` y \`repoName\`.\nEjemplo: \`${PREFIX}github facebook react\``,
		)
		return
	}

	const repository = await request<TApiGithub['repos']>(`${GITHUB_URL}/repos/${ownerName}/${repoName}`, {
		method: 'GET',
	})

	if (!repository) {
		client.message.send(channelId, 'No se ha encontrado el repositorio.')
		return
	}

	client.message.send(channelId, repository.html_url)
}
