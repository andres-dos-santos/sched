'use client'

import { Button, ButtonTitle } from '@/components/ui/button'
import { Input, InputField, InputLabel } from '@/components/ui/input'
import { api } from '@/http/api'
import { ArrowUpRight } from 'lucide-react'
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

	console.log(response)

	if (response.success) return response.data

	return []
}

export default function Occupation() {
	const [specialties, setSpecialties] = useState<ResponseData['specialties']>(
		[],
	)

	useEffect(() => {
		getSpecialties().then((data) => {
			if (data) {
				// setSpecialties(data.specialties)
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

	// 	if (response.success) push('/register/terms-and-conditions')
	// }

	return (
		<>
			<span className="text-[13px] my-5 block">
				Qual é a sua <strong>especialidade</strong>?
			</span>

			<ul className="flex flex-wrap gap-2.5 mb-5">
				{/* {specialties.map((item) => (
					<li
						key={item.id}
						// onClick={() => onSubmit(item)}
						className="h-8 px-4 cursor-pointer rounded-lg bg-zinc-100 hover:bg-zinc-200/50 dark:bg-zinc-800 dark:hover:bg-zinc-800/50"
					>
						<p className="text-xs font-medium">{item.name}</p>
					</li>
				))} */}
			</ul>

			{/* <form action="">
				<Input>
					<InputLabel>Outro</InputLabel>
					<InputField placeholder="Digite sua especialidade aqui" />
				</Input>

				<footer className="mt-5 ml-auto">
					<Button type="submit">
						<ArrowUpRight className="dark:text-zinc-900 text-white size-3" />
						<ButtonTitle>Continuar</ButtonTitle>
					</Button>
				</footer>
			</form> */}
		</>
	)
}
