import clsx from 'clsx'
import type { ComponentProps } from 'react'

export function TextArea(props: ComponentProps<'fieldset'>) {
	return (
		<fieldset className={clsx('w-full', props.className)} {...props}>
			{props.children}
		</fieldset>
	)
}

export function TextAreaLabel(props: ComponentProps<'label'>) {
	return (
		<label htmlFor="" {...props} className="mb-1.5 block font-sans text-xs">
			{props.children}
		</label>
	)
}

export function TextAreaField(props: ComponentProps<'textarea'>) {
	return (
		<textarea
			className="text-xs pt-2.5 bg-white placeholder:font-normal placeholder:text-zinc-500 font-medium focus:border-zinc-300 text-zinc-700 min-h-20 max-h-32 border border-zinc-200 px-2.5 w-full rounded-md outline-none"
			{...props}
		/>
	)
}
