import { AppointmentItem } from '@/components/appointment-item'
import dayjs from 'dayjs'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

import { DayPicker } from 'react-day-picker'
import { CreateAppointmentForm } from '@/components/create-appointment-form'
import Link from 'next/link'

export default async function Home(props) {
	const view = await props.searchParams.view

	return (
		<div className="h-full flex flex-col gap-10">
			<header className="flex items-center justify-between">
				<h1 className="text-2xl font-sans -tracking-wide">
					Bom dia, Dr. Marcos
				</h1>

				<Link
					href="/home/create-appointment"
					className="flex items-center h-10 px-6 bg-zinc-900 hover:ring-4 ring-zinc-400/50"
				>
					<ArrowUpRight className="size-3 text-white" />
					<p className="font-medium text-xs text-white">Agendar a próxima</p>
				</Link>
			</header>

			<ul>
				<li className="text-xs block mb-5 font-medium">Atendimentos de hoje</li>

				<li className="w-full h-24 border rounded-lg border-zinc-100 flex items-center">
					<div className="flex flex-col h-24 w-24 items-center justify-center">
						<strong>{dayjs().format('HH')}</strong>
						<p className="uppercase text-[11px]">{dayjs().format('MMM')}</p>
					</div>

					<p className="text-xs font-medium flex items-center gap-3">
						Visita #4 <ChevronRight className="size-3.5" /> Clareamento dos
						dentes
						<div className="mr-10 h-7 px-2 flex items-center justify-center rounded-lg border border-zinc-200">
							<p className="text-[11px] mt-0.5 font-bold flex items-center gap-3">
								7:00 - 7:30
							</p>
						</div>
					</p>

					<p className="ml-auto mr-10 text-xs font-medium flex items-center gap-3">
						<div className="bg-zinc-200 h-10 w-10 flex items-center justify-center rounded-full">
							<p className="text-xs font-semibold">AN</p>
						</div>{' '}
						Andres
					</p>
				</li>

				<li className="text-xs block mb-5 mt-5 font-medium">Próximos</li>

				<AppointmentItem
					appointmentId="34"
					dateTime={dayjs()}
					patient="Carlos"
					task="Limpeza de cárie"
				/>

				<AppointmentItem
					appointmentId="35"
					dateTime={dayjs().add(1, 'D')}
					patient="Carlos"
					task="Limpeza de cárie"
				/>
			</ul>

			{/* <div className="flex w-full h-full border border-zinc-100 rounded-lg">
				<nav className="h-10 flex items-center border-b border-zinc-100 w-full">
					{['Calendário', 'Lista'].map((item) => (
						<button
							key={item}
							type="button"
							className="relative w-20 flex items-center justify-center h-full cursor-pointer"
						>
							<p className="text-xs font-sans">{item}</p>

							<div
								data-active={view === item}
								className="data-[active=true]:visible invisible h-[1px] w-full absolute bottom-0 bg-zinc-700"
							/>
						</button>
					))}
				</nav>
			</div> */}
		</div>
	)
}
