export function getHeaderCookie(cookies: string, key: string) {
	return cookies
		.split(';')
		.find((item) => item.startsWith(key))
		?.replace(`${key}=`, '')
}
