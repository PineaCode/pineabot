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

// NPM _________________________________________________________________________________________________________________

type TObjectString = { [key: string]: string }

type TUser = {
	name: string
	email: string
	url?: string
}

export type TApiNPM = {
	package: {
		_id: 'instagrapi'
		_rev: '47-dfb900d4e88ed5e1564484afc0ec7ff5'
		name: 'instagrapi'
		'dist-tags': {
			latest: '5.0.0'
		}
		versions: {
			[key: string]: {
				name: 'instagrapi'
				version: '3.2.3'
				description: 'Library to obtain information from an Instagram account in a friendly and intuitive way'
				keywords: string[]
				main: 'dist/index.js'
				types: 'dist/index.d.ts'
				author: TUser
				license: 'MIT'
				private: false
				scripts: {
					clean: 'rimraf ./dist'
					test: 'jest'
					lint: 'prettier --write ./src/**/*.ts'
					dev: 'nodemon -e ts -w ./src --exec "ts-node src"'
					'pre-publish': 'yarn test && yarn lint && yarn clean && yarn build && yarn bundle && yarn minify'
					bundle: 'node tools/createBundle.js'
					minify: 'node tools/minifyBundle.js'
					build: 'tsc'
					start: 'node dist'
					deploy: 'gh-pages -o github -d ./demo'
					serve: 'live-server --port=80 ./demo'
				}
				dependencies: {
					axios: '^0.21.0'
				}
				devDependencies: TObjectString
				engines: {
					node: '^12.18.0'
					yarn: '^1.22.5'
				}
				homepage: 'https://github.com/EdixonAlberto/instagrapi#readme'
				repository: {
					type: 'git'
					url: 'git+https://github.com/EdixonAlberto/instagrapi.git'
				}
				bugs: {
					url: 'https://github.com/EdixonAlberto/instagrapi/issues'
				}
				gitHead: '6537bcb3608b224c355e94429796e5c72b80be04'
				_id: 'instagrapi@3.2.3'
				_nodeVersion: '12.18.0'
				_npmVersion: '6.14.4'
				dist: {
					integrity: 'sha512-P6lglCKif4vAtple1dhlc0pFMBXTsyAKqQvoqu3lN4ccJ2pBO2iAKUnPgTbi87sPMoUH2NPkdqeN0PbfEsJ0/w=='
					shasum: '8bcf98b5944bf905021c9ec9903814794839bb12'
					tarball: 'https://registry.npmjs.org/instagrapi/-/instagrapi-3.2.3.tgz'
					fileCount: 17
					unpackedSize: 232899
					'npm-signature': string
					signatures: [
						{
							keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
							sig: 'MEYCIQDj6GjqyzNFP7FzOw8QHpiHJCZpz4LdhliZAOKYIgRUTAIhAJKgpRjbjWnLwTjKPdErempOb7elBjTxIijyP4KVoF6H'
						},
					]
				}
				_npmUser: TUser
				directories: null
				maintainers: TUser[]
				_npmOperationalInternal: {
					host: 's3://npm-registry-packages'
					tmp: 'tmp/instagrapi_3.2.3_1613343027383_0.5835686170172361'
				}
				_hasShrinkwrap: false
				deprecated: 'Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.'
			}
		}
		time: TObjectString
		maintainers: TUser[]
		description: 'Library to obtain information from an Instagram account in a friendly and intuitive way'
		keywords: [
			'instagram',
			'api',
			'nodejs',
			'typescript',
		]
		author: {
			name: string
			email: string
		}
		license: string
		readme: string
		readmeFilename: string
		homepage: string
		repository: {
			type: 'git' | string
			url: string
		}
		bugs: {
			url: string
		}
	}
}

// WIKIPEDIA ___________________________________________________________________________________________________________

export type TApiWikipedia = {
	query: {
		batchcomplete: ''
		continue: {
			gsroffset: 10
			continue: 'gsroffset||'
		}
		query: {
			pages: {
				[key: string]: {
					pageid: 9259143
					ns: 0
					title: 'Pandemia de COVID-19'
					index: 7
					extract:
						'La pandemia de COVID-19, conocida también como pandemia de coronavirus, es una pandemia actualmente en curso derivada de…'
				}
			}
		}
		limits: {
			extracts: 20
		}
	}
}

// PLATZI ______________________________________________________________________________________________________________

export type TApiPlatzi = {
	error: string[]
	response: Array<{
		link: string
		title: string
		preview: string
		author: string
		author_picture: string
		likes: number
		comments: number
		relative_time: string
	}>
	status_code: number
}
