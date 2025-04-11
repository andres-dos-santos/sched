import 'dotenv/config'

import Fastify from 'fastify'
import cookies from '@fastify/cookie'
import cors from '@fastify/cors'
import middie from '@fastify/middie'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import type { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'

import { authRoutes } from './routes/auth.route'
import { specialtyRoutes } from './routes/specialty.route'

const app = Fastify({
	logger: false,
}).withTypeProvider<JsonSchemaToTsProvider>()

app.register(cookies)
app.register(middie)
app.register(cors, { origin: 'http://localhost:3000', credentials: true })

app.register(swagger, {
	openapi: {
		openapi: '3.0.0',
		info: {
			title: 'Sched',
			description: 'Sched Documentation',
			version: '1.0.0',
		},
	},
})
app.register(swaggerUI, {
	routePrefix: '/docs',
	uiConfig: {
		docExpansion: 'full',
		deepLinking: false,
	},
	uiHooks: {
		onRequest: (request, reply, next) => {
			next()
		},
		preHandler: (request, reply, next) => {
			next()
		},
	},
	staticCSP: true,
	transformStaticCSP: (header) => header,
	transformSpecification: (swaggerObject, request, reply) => {
		return swaggerObject
	},
	transformSpecificationClone: true,
})

app.register(authRoutes, { prefix: 'api/v1/auth' })

app.register(specialtyRoutes, { prefix: 'api/v1/specialty' })

const PORT = 8000

async function start() {
	try {
		await app.listen({ port: PORT, host: '0.0.0.0' })

		console.log(`🚀 Server is running on http://localhost:${PORT}`)
		console.log(`📁 Docs available at http://localhost:${PORT}/docs`)
	} catch (err) {
		app.log.error(err)

		process.exit(1)
	}
}

start()
