import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import type { FastifyReply, FastifyRequest } from 'fastify'
import dayjs from 'dayjs'

import { prisma } from '../lib/prisma'
import { sendVerificationEmail } from '../nodemailer/emails'
import { reply } from '../utils/reply'

interface SignUpBody {
	password: string
	email: string
	firstName: string
	lastName: string
}

async function signUp(
	req: FastifyRequest<{ Body: SignUpBody }>,
	rep: FastifyReply,
) {
	const { email, password, firstName, lastName } = req.body

	const professionalAlreadyExits = await prisma.professional.findUnique({
		where: { email },
	})

	if (professionalAlreadyExits) {
		rep.status(400).send(
			reply({
				data: null,
				message: 'Professional already exists',
				success: false,
			}),
		)
	}

	const hashedPassword = await bcrypt.hash(password, 10)

	const verificationToken = Math.floor(
		100000 + Math.random() * 900000,
	).toString()

	const verificationTokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)

	const professional = await prisma.professional.create({
		data: {
			email,
			passwordHash: hashedPassword,
			firstName,
			lastName,
			verificationToken,
			verificationTokenExpiresAt,
		},
	})

	if (professional) {
		const token = jwt.sign(
			{ professionalId: professional.id },
			process.env.JWT_SECRET ?? '',
			{
				expiresIn: '7d',
			},
		)

		rep.setCookie('sched-token', token, {
			maxAge: 7 * 24 * 60 * 60 * 1000,
			httpOnly: true,
			sameSite: 'lax', // ou 'strict' se quiser mais restritivo
			secure: false, // deve ser apenas para produção
			path: '/',
		})

		await sendVerificationEmail(professional.email, verificationToken)

		rep.status(201).send(
			reply({
				success: true,
				message: 'Professional created successfully',
				data: {
					professional: {
						id: professional.id,
						firstName: professional.firstName,
						lastName: professional.lastName,
						email: professional.email,
					},
				},
			}),
		)
	}
}

export async function login(req: Request, res: Response) {}

export async function logout(req: Request, res: Response) {}

interface VerifyEmalBody {
	code: string
}

async function verifyEmail(
	req: FastifyRequest<{ Body: VerifyEmalBody }>,
	rep: FastifyReply,
) {
	const { code } = req.body

	const professional = await prisma.professional.findUnique({
		where: {
			verificationToken: code,
		},
		select: {
			id: true,
		},
	})

	if (!professional) {
		rep.status(400).send(
			reply({
				success: false,
				message: 'Invalid or expired verification code',
				data: null,
			}),
		)
	}

	await prisma.professional.update({
		where: { id: professional?.id },
		data: {
			verifiedAt: dayjs().format('YYYY-MM-DD HH:mm'),
			// isso não está sendo removido
			verificationToken: undefined,
			verificationTokenExpiresAt: undefined,
		},
	})

	rep.status(201).send(
		reply({
			data: { professional },
			message: 'Email verified successfully',
			success: true,
		}),
	)
}

export const authController = {
	signUp,
	verifyEmail,
}
