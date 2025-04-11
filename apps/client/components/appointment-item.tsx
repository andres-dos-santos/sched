import dayjs from 'dayjs'
import { ChevronRight } from 'lucide-react'

interface Props {
	dateTime: string
	appointmentId: string
	task: string
	patient: string
}

export function AppointmentItem(props: Props) {
	return (
		<li className="w-full h-24 border rounded-lg border-zinc-100 flex items-center mb-2.5">
			<div className="flex flex-col h-24 w-24 items-center justify-center">
				<strong>{dayjs(props.dateTime).format('HH')}</strong>
				<p className="uppercase text-[11px]">
					{dayjs(props.dateTime).format('MMM')}
				</p>
			</div>

			<p className="text-xs font-medium flex items-center gap-3">
				Visita #{props.appointmentId} <ChevronRight className="size-3.5" />{' '}
				{props.task}
				<div className="mr-10 h-7 px-2 flex items-center justify-center rounded-lg border border-zinc-200">
					<p className="text-[11px] mt-0.5 font-bold flex items-center gap-3">
						7:00 - 7:30
					</p>
				</div>
			</p>

			<p className="ml-auto mr-10 text-xs font-medium flex items-center gap-3">
				<div className="bg-zinc-200 h-10 w-10 flex items-center justify-center rounded-full">
					<p className="text-xs font-semibold uppercase">
						{props.patient.slice(0, 2)}
					</p>
				</div>{' '}
				{props.patient}
			</p>
		</li>
	)
}
