const create = {
	tags: ['Specialty'],
	body: {
		type: 'object',
		properties: {
			name: { type: 'string' },
		},
		required: ['name'],
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

export const specialtySchema = {
	create,
}
