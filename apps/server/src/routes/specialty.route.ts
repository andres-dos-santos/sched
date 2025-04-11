import type { FastifyInstance } from 'fastify'

import { specialtyController } from '../controllers/specialty.controller'

import { authMiddleware } from '../middlewares/auth.middleware'

import { specialtySchema } from '../docs/schemas/specialty'

export function specialtyRoutes(app: FastifyInstance) {
	app.addHook('preHandler', authMiddleware)

	app.post(
		'',
		{
			schema: specialtySchema.create,
		},
		specialtyController.create,
	)
}
