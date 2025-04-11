import type { FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'
import { getHeaderCookie } from '../utils/get-header-cookie'

export function authMiddleware(
	req: FastifyRequest,
	rep: FastifyReply,
	done: () => void,
) {
	if (req.headers.cookie) {
		const token = getHeaderCookie(req.headers.cookie, ' shed-token')

		if (!token) return rep.status(401).send({ error: 'Token not provided' })

		try {
			const payload = jwt.verify(token, process.env.JWT_SECRET ?? '')

			req.professionalId = (
				payload as { professionalId: string }
			).professionalId

			done()
		} catch (err) {
			rep.status(401).send({ error: 'Invalid token' })
		}
	} else {
		rep.status(401).send({ error: `Don't have cookies` })
	}
}
