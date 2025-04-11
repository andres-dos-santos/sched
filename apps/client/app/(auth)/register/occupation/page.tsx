'use client'

import { api } from '@/http/api'
import { setCookie } from 'cookies-next/client'
import { useRouter } from 'next/navigation'

const Specialties = [
	'Dentista',
	'Nutricionista',
	'Psicólogo',
	'Fisioterapeuta',
	'Fonoaudiólogo',
	'Advogado',
	'Contador',
	'Arquiteto',
	'Designer de Interiores',
	'Coach',
	'Terapeuta Ocupacional',
	'Quiropraxista',
	'Massoterapeuta',
	'Consultor Financeiro',
	'Médico (algumas especialidades em consultórios particulares)',
	'Veterinário (em clínicas próprias)',
	'Esteticista',
	'Podólogo',
	'Instrutor de Yoga ou Pilates (em estúdios próprios)',
	'Engenheiro Civil (com escritório próprio para projetos)',
	'Consultor de Imagem',
	'Psicanalista',
	'Homeopata',
	'Terapeuta Holístico',
] as const

type Specialty = (typeof Specialties)[number]

export default function Occupation() {
	const { push } = useRouter()

	async function onSubmit(input: Specialty) {
		const response = await api.post('specialty', {
			name: input,
		})

		if (response.success) {
			push('/register/terms-and-conditions')
		}
	}

	return (
		<>
			<span className="text-[13px] mt-5 mb-10 block">
				Qual é a sua <strong>especialidade</strong>?
			</span>

			<div className="flex flex-wrap gap-2.5 mb-5">
				{Specialties.map((item) => (
					<button
						key={item}
						onClick={() => onSubmit(item)}
						type="button"
						className="h-8 px-4 cursor-pointer rounded-lg bg-zinc-100 hover:bg-zinc-200/50 dark:bg-zinc-800 dark:hover:bg-zinc-800/50"
					>
						<p className="text-xs font-medium">{item}</p>
					</button>
				))}
			</div>
		</>
	)
}
