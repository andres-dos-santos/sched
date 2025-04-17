'use client'

import clsx from 'clsx'
import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ComponentProps,
} from 'react'

type ContextData = {
	setError(message?: string): void
	error?: string
}

const Context = createContext<ContextData>({} as ContextData)

export function Input(props: ComponentProps<'fieldset'> & { error?: string }) {
	const [error, setError] = useState<string | undefined>(undefined)

	useEffect(() => {
		if (props.error) setError(props.error)
	}, [props.error])

	return (
		<Context.Provider value={{ error, setError }}>
			<fieldset className={clsx('w-full', props.className)} {...props}>
				{props.children}
			</fieldset>
		</Context.Provider>
	)
}

export function InputLabel(
	props: ComponentProps<'label'> & { required?: boolean },
) {
	const { error } = useContext(Context)

	return (
		<label htmlFor="" {...props} className="mb-1.5 block font-sans text-xs">
			{props.children}
			{props.required && <span className="text-red-500">*</span>}{' '}
			<span className="text-red-500">{error}</span>
		</label>
	)
}

export function InputField({ className, ...props }: ComponentProps<'input'>) {
	const { error } = useContext(Context)

	return (
		<input
			type="text"
			data-error={!!error}
			className={clsx(
				'data-[error=true]:border-red-500 text-xs bg-white dark:bg-zinc-800/50 placeholder:font-normal placeholder:text-zinc-500 dark:placeholder:text-zinc-400 font-medium focus:ring-2 focus:data-[error=true]:ring-red-200/50 dark:focus:ring-blue-800/50 dark:focus:border-blue-600 focus:ring-blue-200/50 focus:border-blue-400 text-zinc-700 dark:text-zinc-100 h-10 border border-zinc-200 dark:border-zinc-700 px-2.5 w-full rounded-md outline-none',
				className,
			)}
			{...props}
		/>
	)
}
