const signUp = {
	tags: ['Authentication'],
	body: {
		type: 'object',
		properties: {
			email: { type: 'string' },
			password: { type: 'string' },
			firstName: { type: 'string' },
			lastName: { type: 'string' },
		},
		required: ['email', 'password', 'firstName', 'lastName'],
	},
	response: {
		201: {
			type: 'object',
			description: 'Success response',
			properties: {
				success: { type: 'string', example: true },
				message: {
					type: 'string',
					example: 'Professional created successfully',
				},
				data: {
					type: 'object',
					properties: {
						professional: {
							type: 'object',
							properties: {
								id: { type: 'string', example: 'some uuid' },
								firstName: { type: 'string', example: 'John' },
								lastName: { type: 'string', example: 'Doe' },
								email: { type: 'string', example: 'johndoe@gmail.com' },
							},
						},
					},
				},
			},
		},
		400: {
			type: 'object',
			description: 'Erro ao tentar cadastrar um profissional que já existe',
			properties: {
				success: { type: 'string', example: false },
				message: {
					type: 'string',
					example: 'Professional already exists',
				},
				data: {
					type: 'object',
					example: null,
				},
			},
		},
	},
}

const verifyEmail = {
	tags: ['Authentication'],
	body: {
		type: 'object',
		properties: {
			code: { type: 'string' },
		},
		required: ['code'],
	},
	response: {
		201: {
			type: 'object',
			description: 'Success response',
			properties: {
				success: { type: 'string', example: true },
				message: {
					type: 'string',
					example: 'Email verified successfully',
				},
				data: {
					type: 'object',
					properties: {
						professional: {
							type: 'object',
							properties: {
								id: { type: 'string', example: 'some uuid' },
							},
						},
					},
				},
			},
		},
		400: {
			type: 'object',
			description: 'Erro ao validar o token',
			properties: {
				success: { type: 'string', example: false },
				message: {
					type: 'string',
					example: 'Invalid or expired verification code',
				},
				data: {
					type: 'object',
					example: null,
				},
			},
		},
	},
}

export const authSchema = {
	signUp,
	verifyEmail,
}
