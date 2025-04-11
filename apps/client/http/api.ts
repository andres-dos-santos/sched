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

async function get(path: string) {
	const response = await fetch(`${baseUrl}${path}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	})

	const data = response.ok ? await response.json() : null
	const message = { status: response.status, text: response.statusText }

	return { success: response.ok, data, message }
}

export const api = {
	post,
	get,
}
