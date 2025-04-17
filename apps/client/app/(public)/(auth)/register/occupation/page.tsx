'use client'

import { Button, ButtonTitle } from '@/components/ui/button'
import { Input, InputField, InputLabel } from '@/components/ui/input'
import { api } from '@/http/api'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { z } from 'zod'

const Schema = z.object({
	name: z.string().min(1, {
		message: 'Campo obrigatório',
	}),
	id: z.number().min(1, {
		message: 'Campo obrigatório',
	}),
})

type FormInput = z.infer<typeof Schema>

type ResponseData = {
	specialties: {
		id: number
		name: string
	}[]
}

async function getSpecialties() {
	const response = await api.get<ResponseData>('specialty')

	if (response.success) return response.data

	return []
}

const specialties = [
	{ id: 1, name: 'Dentista' },
	{ id: 2, name: 'Psicóloga' },
]

export default function Occupation() {
	const [specialties, setSpecialties] = useState<ResponseData['specialties']>(
		[],
	)

	useEffect(() => {
		getSpecialties().then((data) => {
			if (data) {
				setSpecialties(data.specialties)
			}
		})
	}, [])

	// console.log(specialties)
	// const { push } = useRouter()

	// async function onSubmit(input: FormInput) {
	// 	const response = await api.post('specialty', {
	// 		name: input.name,
	// 		id: input.id,
	// 	})

	// 	// if (response.success) push('/register/terms-and-conditions')
	// }

	const [input, setInput] = useState('')
	const [highlight, setHightlight] = useState('')

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value
		setInput(value)

		const match = specialties.find((s) =>
			s.name.toLowerCase().startsWith(value.toLowerCase()),
		)

		if (match && value.length < match.name.length) {
			setHightlight(match.name)
		} else {
			setHightlight('')
		}
	}

	const showHighlight = input !== '' && highlight !== ''

	return (
		<>
			<span className="text-[13px] my-5 block">
				Qual é a sua <strong>especialidade</strong>?
			</span>

			<form action="">
				<div
					data-show={showHighlight}
					className="data-[show=false]:pb-2 px-2 pt-2 pb-1 bg-zinc-100 rounded-lg"
				>
					<Input className="relative">
						<InputField
							onChange={handleChange}
							value={input}
							placeholder="Digite sua especialidade aqui"
							className="relative"
						/>
					</Input>

					<section className="flex items-center justify-between px-2.5">
						{showHighlight && (
							<>
								<span className="flex items-center justify-center h-10 font-medium text-xs -tracking-wide">
									Sugestão "{highlight}"
								</span>

								<button
									type="button"
									className="flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
									onClick={() => setInput(highlight)}
									disabled={!showHighlight}
								>
									<p className="text-[10px] font-medium text-cyan-600">
										APLICAR
									</p>
									<ArrowRight className="size-3.5 text-cyan-600" />
								</button>
							</>
						)}
					</section>
				</div>

				<h2 className="text-zinc-600 block ml-2.5 tracking-wider text-[9px] font-semibold mt-5">
					TODOS AS ESPECIALIDADES
				</h2>
				<ul className="flex flex-wrap gap-2.5 my-5">
					{specialties.map((item) => (
						<li
							key={item.id}
							className="h-8 px-4 flex items-center justify-center cursor-pointer rounded-lg bg-zinc-100 hover:bg-zinc-200/50 dark:bg-zinc-800 dark:hover:bg-zinc-800/50"
						>
							<button
								type="button"
								className="h-full w-full cursor-pointer"
								onClick={() => setInput(item.name)}
							>
								<p className="text-xs font-medium">{item.name}</p>
							</button>
						</li>
					))}
				</ul>

				<footer className="mt-5 ml-auto">
					<Button type="submit">
						<ArrowUpRight className="dark:text-zinc-900 text-white size-3" />
						<ButtonTitle>Continuar</ButtonTitle>
					</Button>
				</footer>
			</form>
		</>
	)
}
