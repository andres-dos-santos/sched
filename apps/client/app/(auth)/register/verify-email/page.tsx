'use client'

import { ArrowUpRight, MailCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { Button, ButtonTitle } from '@/components/ui/button'

import { api } from '@/http/api'

const Schema = z.object({
	code: z.string().min(6, {
		message: 'Must be 6 characters.',
	}),
})

type FormInput = z.infer<typeof Schema>

export default function Success() {
	const { push } = useRouter()

	const { control, handleSubmit } = useForm<FormInput>({
		resolver: zodResolver(Schema),
		defaultValues: {
			code: '789ok9',
		},
	})

	async function onSubmit(input: FormInput) {
		const response = await api.post('auth/verify-email', {
			code: input.code,
		})

		console.log(response)

		if (response.success) push('/register/occupation')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col">
				<div className="flex items-start h-full ">
					<div className="flex items-start gap-3">
						<MailCheck className="size-7 text-zinc-600" />

						<p className="text-xs block mt-[3px]">
							Enviamos um email de verificação para você com um código, copie e
							digite abaixo
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-2.5">
					<p className="text-xs flex items-center mt-5 ml-10 text-blue-500">
						<ArrowUpRight className="size-3.5" /> Abrir email
					</p>
					{/* {cookie && (
						<p className="text-xs flex items-center ml-10 p-2 bg-zinc-100 gap-1.5 rounded-md mt-1.5">
							<Mail className="size-3.5" />
							{cookie.email}
						</p>
					)} */}
				</div>

				<div className="ml-10 mt-5">
					<Controller
						name="code"
						control={control}
						render={({ field }) => (
							<InputOTP maxLength={6} {...field}>
								<InputOTPGroup>
									{Array.from({ length: 6 }).map((_, index) => (
										<InputOTPSlot key={index.toString()} index={index} />
									))}
								</InputOTPGroup>
							</InputOTP>
						)}
					/>
				</div>
			</div>

			<footer className="mt-5 mr-auto ml-10">
				<Button type="submit">
					<ArrowUpRight className="dark:text-zinc-900 text-white size-3" />
					<ButtonTitle>Continuar</ButtonTitle>
				</Button>
			</footer>
		</form>
	)
}
