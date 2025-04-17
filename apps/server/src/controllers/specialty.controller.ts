import type { FastifyReply, FastifyRequest } from 'fastify'

import { prisma } from '../lib/prisma'
import { reply } from '../utils/reply'

interface Create {
	name: string
	id: number
}

async function create(
	req: FastifyRequest<{ Body: Create }>,
	rep: FastifyReply,
) {
	const { name, id } = req.body
	const professionalId = req.professionalId

	const specialty = await prisma.specialty.create({
		include: { professionals: { where: { id: professionalId } } },
		data: {
			name,
			id,
		},
	})

	rep.status(201).send(
		reply({
			data: { specialty: { id: specialty.id } },
			message: 'Specialty created successfully',
			success: true,
		}),
	)
}

async function list(req: FastifyRequest, rep: FastifyReply) {
	const specialties = await prisma.specialty.findMany({})

	rep.status(200).send(
		reply({
			data: { specialties },
			message: 'Specialty listed successfully',
			success: true,
		}),
	)
}

export const specialtyController = {
	create,
	list,
}
