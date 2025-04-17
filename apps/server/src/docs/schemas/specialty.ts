const create = {
	tags: ['Specialty'],
	body: {
		type: 'object',
		properties: {
			name: { type: 'string' },
			id: { type: 'number' },
		},
		required: ['name', 'id'],
	},
	response: {
		201: {
			type: 'object',
			description: 'Success response',
			properties: {
				success: { type: 'string', example: true },
				message: {
					type: 'string',
					example: 'Specialty created successfully',
				},
				data: {
					type: 'object',
					properties: {
						specialty: {
							type: 'object',
							properties: {
								id: { type: 'string', example: 'some uuid' },
							},
						},
					},
				},
			},
		},
	},
}

const list = {
	tags: ['Specialty'],
	response: {
		200: {
			type: 'object',
			properties: {
				success: { type: 'boolean' },
				message: { type: 'string' },
				data: {
					type: 'object',
					properties: {
						specialties: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									id: { type: 'integer' },
									name: { type: 'string' },
								},
								required: ['id', 'name'],
							},
						},
					},
					required: ['specialties'],
				},
			},
			required: ['success', 'message', 'data'],
		},
	},
}

export const specialtySchema = {
	create,
	list,
}
