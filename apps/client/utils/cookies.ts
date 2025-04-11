'use server'

import { cookies as NextCookies } from 'next/headers'

export const cookies = {
	set: async <D>(key: string, value: D) => {
		const cookies = await NextCookies()

		cookies.set(key, JSON.stringify(value))
	},
	get: async (key: string) => {
		const cookies = await NextCookies()

		return cookies.get(key)
	},
}
