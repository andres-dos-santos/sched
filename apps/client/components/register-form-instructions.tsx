'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Step = {
	'/register': 1,
	'/register/verify-email': 2,
	'/register/occupation': 3,
	'/register/terms-and-conditions': 4,
} as const

const Message = {
	'/register': 'Preencha os campos abaixo',
	'/register/verify-email': 'Preencha o campo com a sua verificação',
	'/register/occupation': 'Selecione uma opção',
	'/register/terms-and-conditions': 'Aceite os termos e condições',
} as const

const GoBackLink = {
	'/register': '',
	'/register/verify-email': '/register',
	'/register/occupation': '/register/verify-email',
	'/register/terms-and-conditions': '/register/occupation',
} as const

export function RegisterFormInstructions() {
	const pathname = usePathname() as keyof typeof Step

	return (
		<div className="flex items-center gap-2.5 mb-10">
			<div className="flex items-center">
				{Step[pathname] > 1 && (
					<Link href={GoBackLink[pathname]}>
						<ArrowLeft className="size-3.5 mr-2.5" />
					</Link>
				)}
				<p className="text-[11px] font-medium text-zinc-700 dark:text-white">
					<span className="bg-yellow-500/50 dark:bg-yellow-800/50 p-1">
						{Step[pathname]} de 4
					</span>{' '}
					<span className="mx-5">/</span> {Message[pathname]}
				</p>
			</div>
		</div>
	)
}
