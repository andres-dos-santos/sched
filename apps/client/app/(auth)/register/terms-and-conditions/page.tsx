'use client'

import { redirect } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button, ButtonTitle } from '@/components/ui/button'

export default function Page() {
	const [termsAndConditionsIsAccepted, setTermsAndConditionsIsAccepted] =
		useState(true)

	return (
		<>
			<div className="h-full w-full relative">
				<ScrollArea className="h-[300px] lg:h-[400px] bg-white rounded-md border w-full prose prose-sm prose-p:text-xs prose-h1:text-lg prose-h2:text-sm px-5">
					<h1 className="mt-5">Termos e Condições</h1>
					<p>
						Bem-vindo ao nosso site de agendamentos. Ao acessar e utilizar este
						site, você concorda com os seguintes termos e condições. Leia
						atentamente antes de continuar.
					</p>

					<h2>1. Aceitação dos Termos</h2>
					<p>
						Ao utilizar este site, você declara estar de acordo com todos os
						termos aqui descritos. Caso não concorde com algum destes termos,
						recomendamos que não utilize nossos serviços.
					</p>

					<h2>2. Sobre o Serviço</h2>
					<p>
						Nosso site oferece uma plataforma para agendamento de serviços
						diversos. A disponibilidade e o horário dos serviços dependem da
						agenda dos prestadores cadastrados.
					</p>

					<h2>3. Cadastro e Responsabilidade do Usuário</h2>
					<p>
						O usuário é responsável por fornecer informações verídicas no
						momento do cadastro e agendamento. É proibido o uso de dados falsos
						ou de terceiros sem autorização.
					</p>

					<h2>4. Cancelamento e Reagendamento</h2>
					<p>
						Cancelamentos e reagendamentos devem ser realizados com antecedência
						mínima de 24 horas, salvo exceções previstas pelos prestadores. O
						não comparecimento pode gerar cobrança total ou parcial do serviço.
					</p>

					<h2>5. Privacidade</h2>
					<p>
						As informações pessoais fornecidas serão utilizadas apenas para fins
						de agendamento e comunicação, conforme nossa{' '}
						<a href="/politica-de-privacidade.html">Política de Privacidade</a>.
					</p>

					<h2>6. Modificações dos Termos</h2>
					<p>
						Reservamo-nos o direito de alterar estes termos a qualquer momento.
						Recomenda-se revisar esta página periodicamente.
					</p>

					<h2>7. Contato</h2>
					<p>
						Para dúvidas ou solicitações, entre em contato conosco pelo e-mail:{' '}
						<a href="mailto:contato@seusite.com">contato@seusite.com</a>.
					</p>

					<p>
						<strong>Última atualização:</strong> 09 de abril de 2025
					</p>
				</ScrollArea>

				<footer className="h-[10rem] flex justify-evenly flex-col mt-2 px-1.5 w-full">
					<div className="flex items-start gap-2.5">
						<Checkbox
							className="mt-1"
							checked={termsAndConditionsIsAccepted}
							onCheckedChange={() =>
								setTermsAndConditionsIsAccepted(!termsAndConditionsIsAccepted)
							}
						/>
						<div className="flex flex-col">
							<p className="text-xs font-sans font-semibold -tracking-wide">
								Estou de acordo com os termos e condições
							</p>

							<span className="text-[11px] text-zinc-500">
								Eu aceito todos os cookies da aplicação para uma melhor
								experiência
							</span>
						</div>
					</div>

					<Button
						onClick={() => redirect('/appointments')}
						className="mt-5 mr-auto"
						disabled={!termsAndConditionsIsAccepted}
					>
						<ArrowUpRight className="dark:text-zinc-900 text-white size-3" />
						<ButtonTitle>Vamos lá!</ButtonTitle>
					</Button>
				</footer>
			</div>
		</>
	)
}
