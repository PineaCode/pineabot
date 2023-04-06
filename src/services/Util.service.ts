export abstract class UtilService {
	public changeCasing(input: string): string {
		if (!input) return ''

		if (input.indexOf('_') > -1) {
			const regex = new RegExp('_.', 'gm')
			return input.toLowerCase().replace(regex, (match) => {
				const char = match.replace('_', '')
				return char.toUpperCase()
			})
		} else return input
	}

	public static searchWords(message: string, wordList: string[]): boolean {
		return message.split(' ').find((word: string) => wordList.includes(word.toLowerCase())) !== undefined
	}

	public static ignoreAcents(text: string): string {
		type TCharKeys = keyof typeof chars

		const chars = {
			'á': 'a',
			'é': 'e',
			'í': 'i',
			'ó': 'o',
			'ú': 'u',
			'à': 'a',
			'è': 'e',
			'ì': 'i',
			'ò': 'o',
			'ù': 'u',
			'ñ': 'n',
			'Á': 'A',
			'É': 'E',
			'Í': 'I',
			'Ó': 'O',
			'Ú': 'U',
			'À': 'A',
			'È': 'E',
			'Ì': 'I',
			'Ò': 'O',
			'Ù': 'U',
			'Ñ': 'N',
		}
		const expresion = /[áàéèíìóòúùñ]/ig
		return text.replaceAll(expresion, (exp) => chars[exp as TCharKeys])
	}
}
