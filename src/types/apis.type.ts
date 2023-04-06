// OPENAI ______________________________________________________________________________________________________________

export type TApiOpenAI = {
	completions: {
		id: string
		object: string
		created: number
		model: string
		usage: {
			prompt_tokens: number
			completion_tokens: number
			total_tokens: number
		}
		choices: [
			{
				message: {
					role: string
					content: string
				}
				finish_reason: string
				index: number
			},
		]
	}
}

// GITHUB ______________________________________________________________________________________________________________

export type TApiGithub = {
	search: {
		total_count: number
		incomplete_results: boolean
		items: TRepo[]
	}
	// TODO: revisar este type despues
	repos: TRepo & {
		message: string
		documentation_url: string
	}
}

export type TRepo = {
	id: 585311126
	node_id: 'R_kgDOIuMjlg'
	name: 'api-jobs-dev'
	full_name: 'EdixonAlberto/api-jobs-dev'
	private: boolean
	owner: {
		login: 'EdixonAlberto'
		id: 40126214
		node_id: 'MDQ6VXNlcjQwMTI2MjE0'
		avatar_url: 'https://avatars.githubusercontent.com/u/40126214?v=4'
		gravatar_id: ''
		url: 'https://api.github.com/users/EdixonAlberto'
		html_url: 'https://github.com/EdixonAlberto'
		followers_url: 'https://api.github.com/users/EdixonAlberto/followers'
		following_url: 'https://api.github.com/users/EdixonAlberto/following{/other_user}'
		gists_url: 'https://api.github.com/users/EdixonAlberto/gists{/gist_id}'
		starred_url: 'https://api.github.com/users/EdixonAlberto/starred{/owner}{/repo}'
		subscriptions_url: 'https://api.github.com/users/EdixonAlberto/subscriptions'
		organizations_url: 'https://api.github.com/users/EdixonAlberto/orgs'
		repos_url: 'https://api.github.com/users/EdixonAlberto/repos'
		events_url: 'https://api.github.com/users/EdixonAlberto/events{/privacy}'
		received_events_url: 'https://api.github.com/users/EdixonAlberto/received_events'
		type: 'User'
		site_admin: boolean
	}
	html_url: 'https://github.com/EdixonAlberto/api-jobs-dev'
	description: 'API Rest para buscar empleo en programación. Creado con Deno 🦕'
	fork: boolean
	url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev'
	forks_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/forks'
	keys_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/keys{/key_id}'
	collaborators_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/collaborators{/collaborator}'
	teams_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/teams'
	hooks_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/hooks'
	issue_events_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/issues/events{/number}'
	events_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/events'
	assignees_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/assignees{/user}'
	branches_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/branches{/branch}'
	tags_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/tags'
	blobs_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/git/blobs{/sha}'
	git_tags_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/git/tags{/sha}'
	git_refs_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/git/refs{/sha}'
	trees_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/git/trees{/sha}'
	statuses_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/statuses/{sha}'
	languages_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/languages'
	stargazers_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/stargazers'
	contributors_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/contributors'
	subscribers_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/subscribers'
	subscription_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/subscription'
	commits_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/commits{/sha}'
	git_commits_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/git/commits{/sha}'
	comments_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/comments{/number}'
	issue_comment_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/issues/comments{/number}'
	contents_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/contents/{+path}'
	compare_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/compare/{base}...{head}'
	merges_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/merges'
	archive_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/{archive_format}{/ref}'
	downloads_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/downloads'
	issues_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/issues{/number}'
	pulls_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/pulls{/number}'
	milestones_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/milestones{/number}'
	notifications_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/notifications{?since,all,participating}'
	labels_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/labels{/name}'
	releases_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/releases{/id}'
	deployments_url: 'https://api.github.com/repos/EdixonAlberto/api-jobs-dev/deployments'
	created_at: '2023-01-04T21:11:54Z'
	updated_at: '2023-03-27T13:26:37Z'
	pushed_at: '2023-03-13T17:36:25Z'
	git_url: 'git://github.com/EdixonAlberto/api-jobs-dev.git'
	ssh_url: 'git@github.com:EdixonAlberto/api-jobs-dev.git'
	clone_url: 'https://github.com/EdixonAlberto/api-jobs-dev.git'
	svn_url: 'https://github.com/EdixonAlberto/api-jobs-dev'
	homepage: ''
	size: 215
	stargazers_count: 3
	watchers_count: 3
	language: 'TypeScript'
	has_issues: true
	has_projects: boolean
	has_downloads: true
	has_wiki: boolean
	has_pages: boolean
	has_discussions: boolean
	forks_count: 1
	mirror_url: null
	archived: boolean
	disabled: boolean
	open_issues_count: 0
	license: {
		key: 'mit'
		name: 'MIT License'
		spdx_id: 'MIT'
		url: 'https://api.github.com/licenses/mit'
		node_id: 'MDc6TGljZW5zZTEz'
	}
	allow_forking: true
	is_template: boolean
	web_commit_signoff_required: boolean
	topics: [
		'deno',
		'portfolio',
		'preact',
		'typescript',
	]
	visibility: 'public'
	forks: 1
	open_issues: 0
	watchers: 3
	default_branch: 'main'
	temp_clone_token: null
	network_count: 1
	subscribers_count: 1
}
