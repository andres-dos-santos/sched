import { Bell, Calendar, CalendarArrowUp, User } from 'lucide-react'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="max-w-[85%] flex ml-auto min-h-screen">
			<aside className="relative pt-20 w-[300px] h-screen border-zinc-200">
				<h2 className="font-light text-3xl -tracking-wider">Sched</h2>

				<ul className="pt-10">
					<li className="gap-4 text-xs h-10 flex items-center justify-start hover:bg-zinc-100/50 pl-3 cursor-pointer">
						<CalendarArrowUp className="size-4" />
						<p>Agendamentos</p>
					</li>
					<li className="gap-4 text-xs h-10 flex items-center justify-start hover:bg-zinc-100/50 pl-3 cursor-pointer">
						<Bell className="size-4" />
						<p>Histórico de notificações</p>
					</li>
					<li className="gap-4 text-xs h-10 flex items-center justify-start hover:bg-zinc-100/50 pl-3 cursor-pointer">
						<User className="size-4" />
						<p>Perfil</p>
					</li>
				</ul>

				<p className="absolute bottom-5 mt-auto text-[11px] text-zinc-700">
					Todos os direitos reservados
				</p>
			</aside>

			<div className="p-1 w-full h-screen">
				<div className="bg-white rounded-xl border border-zinc-200 h-full p-10">
					{children}
				</div>
			</div>
		</div>
	)
}
