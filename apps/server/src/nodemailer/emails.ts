import { transporter } from './nodemailer.config'
import { VerificationEmailTemplate } from './templates'

export async function sendVerificationEmail(
	email: string,
	verificationToken: string,
) {
	const info = await transporter.sendMail({
		// from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
		from: '"Sched" <marketing@sched.gmail>',
		to: email,
		subject: 'Verificação de email - Sched',
		html: VerificationEmailTemplate.replace(
			'{verificationCode}',
			verificationToken,
		),
	})

	console.log('Message sent: %s', info.messageId)
}
