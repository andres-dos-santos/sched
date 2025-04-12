import { prisma } from '../../src/lib/prisma'

const Specialties = [
	{ id: 1, name: 'Dentista' },
	{ id: 2, name: 'Nutricionista' },
	{ id: 3, name: 'Psicólogo' },
	{ id: 4, name: 'Fisioterapeuta' },
	{ id: 5, name: 'Fonoaudiólogo' },
	{ id: 6, name: 'Advogado' },
	{ id: 7, name: 'Contador' },
	{ id: 8, name: 'Arquiteto' },
	{ id: 9, name: 'Designer de Interiores' },
	{ id: 10, name: 'Coach' },
	{ id: 11, name: 'Terapeuta Ocupacional' },
	{ id: 12, name: 'Quiropraxista' },
	{ id: 13, name: 'Massoterapeuta' },
	{ id: 14, name: 'Consultor Financeiro' },
	{
		id: 15,
		name: 'Médico (algumas especialidades em consultórios particulares)',
	},
	{ id: 16, name: 'Veterinário (em clínicas próprias)' },
	{ id: 17, name: 'Esteticista' },
	{ id: 18, name: 'Podólogo' },
	{ id: 19, name: 'Instrutor de Yoga ou Pilates (em estúdios próprios)' },
	{ id: 20, name: 'Engenheiro Civil (com escritório próprio para projetos)' },
	{ id: 21, name: 'Consultor de Imagem' },
	{ id: 22, name: 'Homeopata' },
	{ id: 23, name: 'Terapeuta Holístico' },
]

async function specialtySeed() {
	await prisma.specialty.createMany({
		data: Specialties,
	})
}

specialtySeed()
