export abstract class UtilService {
	protected changeCasing(input: string): string {
		if (!input) return ''

		if (input.indexOf('_') > -1) {
			const regex = new RegExp('_.', 'gm')
			return input.toLowerCase().replace(regex, (match) => {
				const char = match.replace('_', '')
				return char.toUpperCase()
			})
		} else return input
	}
}
