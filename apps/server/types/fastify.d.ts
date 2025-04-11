import 'fastify'

declare module 'fastify' {
	interface FastifyRequest {
		professionalId?: string
	}
}
