import clsx from 'clsx'
import { Loader, Loader2 } from 'lucide-react'
import type { ComponentProps } from 'react'

export function Button({
	className,
	...props
}: ComponentProps<'button'> & { isLoading?: boolean }) {
	return (
		<button
			className={clsx(
				'disabled:cursor-not-allowed disabled:opacity-50 h-10 max-w-48 cursor-pointer px-10 dark:hover:bg-zinc-100 dark:bg-white hover:bg-zinc-900 bg-zinc-800 flex items-center justify-center rounded-md',
				className,
			)}
			{...props}
		>
			{props.isLoading ? (
				<Loader2 className="animate-spin text-white dark:text-zinc-900 size-3.5" />
			) : (
				props.children
			)}
		</button>
	)
}

export function ButtonTitle(props: ComponentProps<'p'>) {
	return (
		<p
			className={clsx(
				'text-xs text-white dark:text-zinc-900 font-medium',
				props.className,
			)}
			{...props}
		>
			{props.children}
		</p>
	)
}
