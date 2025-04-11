'use client'

import { Input, InputField, InputLabel } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	ArrowLeft,
	ArrowUpRight,
	Check,
	Eye,
	EyeClosed,
	Mail,
	PencilLine,
	X,
} from 'lucide-react'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { setCookie } from 'cookies-next/client'
import { useState } from 'react'
import { Button, ButtonTitle } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useLoading } from '@/hooks/use-loading'
import { api } from '@/http/api'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

const Schema = z
	.object({
		firstName: z.string(),
		lastName: z.string(),
		email: z.string().email({ message: 'com formato inválido.' }),
		password: z
			.string()
			.min(8, 'deve ter no mínimo 8 caracteres')
			.regex(
				passwordRegex,
				'deve conter letra maiúscula, minúscula, número e caractere especial',
			),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não coincidem',
		path: ['confirmPassword'],
	})

type FormInput = z.infer<typeof Schema>

const checkUpperCase = (password: string) => password && /[A-Z]/.test(password)
const checkLowerCase = (password: string) => password && /[a-z]/.test(password)
const checkNumber = (password: string) => password && /[0-9]/.test(password)
const checkSpecialChar = (password: string) =>
	password && /[\W_]/.test(password)
const checkMinLength = (password: string) => password && password.length >= 8

export default function Page() {
	const [show, setShow] = useState(false)

	const { push } = useRouter()
	const { loading, setLoading } = useLoading()

	const { handleSubmit, register, formState, watch } = useForm<FormInput>({
		resolver: zodResolver(Schema),
		defaultValues: {
			email: 'andres.dosantosbritoamaral@gmail.com',
			lastName: 'dos Santos',
			firstName: 'Andres',
			confirmPassword: 'dQ8@nuno',
			password: 'dQ8@nuno',
		},
	})

	async function onSubmit(input: FormInput) {
		try {
			setLoading(true)

			const response = await api.post('auth/sign-up', {
				firstName: input.firstName,
				password: input.password,
				lastName: input.lastName,
				email: input.email,
			})

			if (response.success) push('/register/verify-email')
		} catch (error) {
			console.log(error)
		}
	}

	const { errors } = formState

	const password = watch('password')

	const PasswordValidation = [
		{
			label: 'Pelo menos uma letra maiúscula',
			valid: checkUpperCase(password),
		},
		{
			label: 'Pelo menos uma letra minúscula',
			valid: checkLowerCase(password),
		},
		{ label: 'Pelo menos um número', valid: checkNumber(password) },
		{
			label: 'Pelo menos um caractere especial',
			valid: checkSpecialChar(password),
		},
		{ label: 'Pelo menos 8 caracteres', valid: checkMinLength(password) },
	]

	return (
		<>
			<form
				className="flex flex-col gap-5 w-full"
				action=""
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex items-center gap-5">
					<Input error={errors.firstName?.message}>
						<InputLabel required>Nome</InputLabel>
						<InputField
							placeholder="Primeiro nome"
							{...register('firstName')}
						/>
					</Input>

					<Input error={errors.lastName?.message}>
						<InputLabel required>Sobrenome</InputLabel>
						<InputField placeholder="Último nome" {...register('lastName')} />
					</Input>
				</div>

				<Input className="col-span-2" error={errors.email?.message}>
					<InputLabel required>Email</InputLabel>
					<InputField
						placeholder="O email para receber agendas"
						{...register('email')}
					/>
				</Input>

				<div className="flex gap-5">
					<Input error={errors.password?.message}>
						<InputLabel>Senha</InputLabel>
						<div className="flex items-center relative h-10">
							<InputField
								type={!show ? 'password' : 'text'}
								{...register('password')}
							/>

							<button
								type="button"
								onClick={() => setShow((prev) => !prev)}
								className="absolute right-0 flex items-center justify-center h-10 w-10"
							>
								{show ? (
									<EyeClosed className="size-3.5" />
								) : (
									<Eye className="size-3.5" />
								)}
							</button>
						</div>
					</Input>

					<Input error={errors.confirmPassword?.message}>
						<InputLabel>Confirme sua senha</InputLabel>
						<InputField type="password" {...register('confirmPassword')} />
					</Input>
				</div>

				<ul className="gap-2 flex flex-col">
					{PasswordValidation.map((item) => {
						return (
							<li key={item.label} className="flex items-center gap-2">
								{item.valid ? (
									<Check className="size-3.5 text-green-500" />
								) : (
									<X className="size-3.5 text-zinc-500" />
								)}
								<p
									data-correct={item.valid}
									className="data-[correct=true]:text-green-500 text-zinc-500 text-xs"
								>
									{item.label}
								</p>
							</li>
						)
					})}
				</ul>

				<Button type="submit" isLoading={loading}>
					<ArrowUpRight className="dark:text-zinc-900 text-white size-3" />
					<ButtonTitle>Continuar</ButtonTitle>
				</Button>
			</form>
		</>
	)
}
