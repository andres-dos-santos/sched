import type { FastifyReply, FastifyRequest } from 'fastify'

import { prisma } from '../lib/prisma'
import { reply } from '../utils/reply'

interface Create {
	name: string
}

async function create(
	req: FastifyRequest<{ Body: Create }>,
	rep: FastifyReply,
) {
	const { name } = req.body
	const professionalId = req.professionalId

	const specialty = await prisma.specialty.create({
		data: { name },
		include: { professionals: { where: { id: professionalId } } },
	})

	rep.status(201).send(
		reply({
			data: { specialty: { id: specialty.id } },
			message: 'Specialty created successfully',
			success: true,
		}),
	)
}

export const specialtyController = {
	create,
}
