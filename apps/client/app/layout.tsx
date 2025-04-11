import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Barlow, Syne } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { ScrollArea } from '@/components/ui/scroll-area'

import './globals.css'

const sans = Plus_Jakarta_Sans({
	variable: '--font-sans',
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const tertiary = Syne({
	variable: '--font-tertiary',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
})

const secondary = Barlow({
	variable: '--font-secondary',
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
	title: 'Sched',
	description: 'Gerencie seu tempo e dinheiro com o Sched.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={`${sans.variable} ${secondary.variable} ${tertiary.variable} flex items-center justify-center bg-zinc-300 dark:bg-zinc-950 overflow-hidden antialiased p-1`}
			>
				<ScrollArea className="h-[calc(100vh_-_8px)] w-full rounded-xl border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-900 relative">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</ScrollArea>
			</body>
		</html>
	)
}
