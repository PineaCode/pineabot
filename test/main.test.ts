import { assertEquals } from 'testing/asserts.ts'

import { UtilService } from '$/services/Util.service.ts'
import { WORDS_MADURO } from '$/entities/consts.ts'

Deno.test('Util Service', async (t) => {
	await t.step('> Change Casing', () => {
		class Util extends UtilService {}
		const textInCamelCase = new Util().changeCasing('SNAKE_CASE')
		assertEquals(textInCamelCase, 'snakeCase')
	})

	await t.step('> Search Word', () => {
		const messages = [
			'Lorem ipsum maduroabcd consectetur.',
			'Lorem ipsum abcmaduro consectetur.',
			'Lorem ipsum maduro consectetur.',
			'maduro consectetur.',
			'Lorem ipsum maduro',
			'Lorem ipsum madurito consectetur.',
			'Lorem ipsum chavez consectetur.',
			'Lorem ipsum socialismo consectetur.',
		]

		messages.forEach((msg: string, i: number) => {
			const wordFound = UtilService.searchWords(msg, WORDS_MADURO)

			// Estos mensajes deben fallar
			if (i === 0 || i === 1) assertEquals(wordFound, false)
			// Estos mensajes deben pasar
			else assertEquals(wordFound, true)
		})
	})

	await t.step('> Ignore Acents', () => {
		const text = 'República (Platón)'
		const textWitoutAcents = UtilService.ignoreAcents(text)
		assertEquals(textWitoutAcents, 'Republica (Platon)')
	})
})
