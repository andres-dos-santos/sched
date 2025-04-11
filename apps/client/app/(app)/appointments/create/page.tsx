'use client'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { createContext, useContext, useState } from 'react'
import dayjs from 'dayjs'
import { Input, InputField, InputLabel } from '@/components/ui/input'
import {
	TextArea,
	TextAreaField,
	TextAreaLabel,
} from '@/components/ui/text-area'

export default function CreateAppointment() {
	return (
		<>
			<header className="flex items-center justify-between col-span-2">
				<h1 className="text-2xl font-sans -tracking-wide">
					Agende outra consulta
				</h1>
			</header>

			<div className="flex items-start gap-20">
				<ul className="mt-10 gap-1.5 flex flex-col w-[35%]">
					{/* <li className="my-5">
						<p className="text-[10px] font-medium text-zinc-600 tracking-wide">
							HORÁRIOS COMUNS
						</p>
					</li>

					<li className="px-5 rounded-lg hover:bg-zinc-100 flex items-center justify-between w-full h-14">
						<p className="text-xs font-medium -tracking-wide">
							Próximo mês, mesmo horário
						</p>

						<p className="flex ml-auto text-[13px] font-medium -tracking-wide">
							{dayjs().add(1, 'month').format('MMM, DD')}
						</p>
						<ChevronRight className="size-3.5 ml-1.5" />
					</li>

					<li className="px-5 rounded-lg hover:bg-zinc-100 flex items-center justify-between w-full h-14">
						<p className="text-xs font-medium -tracking-wide">
							Próxima semana, mesmo horário
						</p>

						<p className="flex ml-auto text-[13px] font-medium -tracking-wide">
							{dayjs().add(1, 'week').format('MMM, DD')}
						</p>
						<ChevronRight className="size-3.5 ml-1.5" />
					</li>

					<li className="px-5 rounded-lg hover:bg-zinc-100 flex items-center justify-between w-full h-14">
						<p className="text-xs font-medium -tracking-wide">Daqui 15 dias</p>

						<p className="flex ml-auto text-[13px] font-medium -tracking-wide">
							{dayjs().add(15, 'd').format('MMM, DD')}
						</p>
						<ChevronRight className="size-3.5 ml-1.5" />
					</li> */}

					<li>
						<DayPicker
							animate
							mode="single"
							components={{
								NextMonthButton({ onClick }) {
									return (
										<button type="button" onClick={onClick}>
											<ChevronRight className="size-5" />
										</button>
									)
								},
								PreviousMonthButton({ onClick }) {
									return (
										<button type="button" onClick={onClick}>
											<ChevronLeft className="size-5" />
										</button>
									)
								},
								DayButton(props) {
									return (
										<div className="relative h-32 w-32 flex items-center justify-center border-r border-b border-zinc-100">
											<p className="absolute top-3 font-tertiary text-base text-zinc-700 font-medium left-3">
												{props.children}
											</p>
										</div>
									)
								},
							}}
							styles={{
								weekdays: {
									fontSize: 12,
								},
								month_caption: {
									fontSize: 13,
									fontWeight: '600',
								},
								// day: {
								// 	fontSize: 15,
								// 	fontWeight: '500',
								// 	color: '#27272a',
								// 	letterSpacing: -0.2,
								// 	fontFamily: 'var(--font-tertiary)',
								// },
							}}
						/>

						{/* <ul className="flex gap-2.5 flex-col w-full h-full">
								{['18:00', '12:30', '14:50'].map((item) => (
									<li
										key={item}
										className="bg-zinc-50 h-8 flex items-center justify-center rounded-lg"
									>
										<p className="text-[13px] font-medium">{item}</p>
									</li>
								))} 
							</ul>*/}
					</li>
				</ul>

				{/* <div className="mt-10 flex-col flex gap-5 bg-zinc-50/10 border border-zinc-100 rounded-xl p-10">
					<Input>
						<InputLabel>Cliente</InputLabel>
						<InputField placeholder="Selecione o paciente" />
					</Input>

					<Input>
						<InputLabel>Serviço</InputLabel>
						<InputField placeholder="Selecione o serviço" />
					</Input>

					<TextArea>
						<TextAreaLabel>Observação</TextAreaLabel>
						<TextAreaField placeholder="Faça alguma observação" />
					</TextArea>

					<footer className="flex items-center justify-end gap-2.5">
						<button
							className="h-10 bg-cyan-500 w-1/2 flex items-center justify-center rounded-md"
							type="button"
						>
							<ArrowUpRight className="size-3.5 text-white" />
							<p className="font-semibold text-[13px] text-white">
								Agendar atendimento
							</p>
						</button>
					</footer>
				</div> */}
			</div>
		</>
	)
}
