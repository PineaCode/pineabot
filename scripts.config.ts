import { DenonConfig } from 'https://deno.land/x/denon@2.5.0/mod.ts'

const config: DenonConfig = {
	scripts: {
		start: {
			cmd: 'denon run --allow-read --allow-env --allow-net src/main.ts',
			desc: 'run bot from entrypoint',
		},
	},
}

export default config
