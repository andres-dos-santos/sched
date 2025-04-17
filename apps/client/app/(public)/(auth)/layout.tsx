import { Instagram } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode } from 'react'

import logo from '../../../public/logo-xs.png'
import { RegisterFormInstructions } from '@/components/register-form-instructions'

export default async function Layout({ children }: { children: ReactNode }) {
	// console.log(Layout.theme)
	return (
		<>
			<div className="dark:hidden absolute bottom-0 w-[400px] h-[400px] z-10 rounded-full bg-white/50 dark:bg-zinc-800/50 opacity-50 blur-xl pointer-events-none" />
			<div className="z-0 absolute inset-0 rounded-xl bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a80_1px,transparent_1px),linear-gradient(to_bottom,#27272a80_1px,transparent_1px)] bg-[length:200px_200px]" />
			<div className="relative mx-auto sm:max-w-[540px] lg:max-w-[920px] h-screen lg:pt-40 pt-20 z-50">
				{/* <Image alt="" src={logo} className="absolute top-12" /> */}
				{/* <div className="absolute -top-10 left-10 -translate-x-1/2 w-[700px] h-[800px] rounded-full bg-purple-200/20 opacity-50 blur-3xl pointer-events-none z-0" /> */}

				<div className="grid lg:grid-cols-2 gap-10 lg:px-0 px-5">
					<header className="flex flex-col items-start gap-5">
						<h1 className="font-bold -tracking-wide font-sans text-2xl">
							<span className="font-light">Crie sua conta</span> <br />{' '}
							profissional
						</h1>

						<span className="font-sans mt-2.5 text-[12px] text-zinc-700 dark:text-zinc-300 leading-[24px]">
							Crie um perfil no{' '}
							<span className="underline text-cyan-600 font-medium">
								#SCHED
							</span>{' '}
							e divulge o seu trabalho para mais de 100k de usuários.
						</span>

						<div className="relative flex items-center">
							<div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border" />
							<div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border -ml-2.5" />
							<div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border -ml-2.5" />
							<div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border -ml-2.5" />

							<span className="font-sans font-semibold -tracking-wider text-[12px] text-zinc-700 dark:text-zinc-100 ml-2">
								+100k de usuários
							</span>
						</div>
					</header>

					<div>
						<RegisterFormInstructions />
						{children}
					</div>
				</div>

				<footer className="absolute bottom-10 lg:bottom-10 sm:left-0 left-5">
					<section className="flex items-center gap-2.5 mt-10">
						<Instagram className="size-4" />•
						<p className="text-xs text-zinc-800 dark:text-zinc-200">Suporte</p>
					</section>
				</footer>
			</div>
		</>
	)
}
