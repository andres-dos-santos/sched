interface Reply<D> {
	data: D
	message: string
	success: boolean
}

export function reply<D>(props: Reply<D>) {
	return props
}
