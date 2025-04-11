import type { FastifyInstance } from 'fastify'

import { authController } from '../controllers/auth.controller'
import { authSchema } from '../docs/schemas/auth'

export function authRoutes(app: FastifyInstance) {
	app.post(
		'/sign-up',
		{
			schema: authSchema.signUp,
		},
		authController.signUp,
	)

	app.post(
		'/verify-email',
		{
			schema: authSchema.verifyEmail,
		},
		authController.verifyEmail,
	)
}
