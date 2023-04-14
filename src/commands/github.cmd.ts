import type { TAction, TApiGithub } from '$TYPES'

export const github: TAction = async (data, { client, request }) => {
	const { GITHUB_URL, PREFIX } = client.envs
	const channelId = [data.channel_id]
	const [ownerName, repoName] = data.content.split(' ').filter((msg: string) => msg)

	if (!ownerName || !repoName) {
		client.message.send(
			channelId,
			`❌ Este comando requiere de dos parametros.\nEjemplo: \`${PREFIX}github facebook react\``,
		)
		return
	}

	const repository = await request<TApiGithub['repos']>(`${GITHUB_URL}/repos/${ownerName}/${repoName}`)

	if (!repository) {
		client.message.send(channelId, '🔍 No se ha encontrado el repositorio.')
		return
	}

	// TODO: crear un mensaje embed mas elaborado para enviar como respuesta
	client.message.send(channelId, repository.html_url)
}
