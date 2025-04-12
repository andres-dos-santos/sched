const baseUrl = 'http://localhost:8000/api/v1/'

async function post<B>(path: string, body: B) {
	const response = await fetch(`${baseUrl}${path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: JSON.stringify(body),
	})

	const data = response.ok ? await response.json() : null
	const message = { status: response.status, text: response.statusText }

	return { success: response.ok, data, message }
}

interface Response<D> {
	success: boolean
	data: D | null
	message: string
}

async function get<D>(path: string) {
	const response = await fetch(`${baseUrl}${path}`, {
		credentials: 'include',
	})

	const data = response.ok ? await response.json() : null
	console.log('data', data)

	return data
}

export const api = {
	post,
	get,
}
