import nodemailer from 'nodemailer'

/** ⚠️ PRECISA SER CONFIGURADO PARA OFFICE365 E APPLE
 * host: 'smtp.mail.me.com' - Apple
 * host: 'smtp.office365.com' - Office
 *
 * A autenticação "auth" deve ser alterada, hoje só tem o do Google
 */

export const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'andres.dosantosbritoamaral@gmail.com',
		pass: 'lftt shwu hrtr yfdz',
	},
})
