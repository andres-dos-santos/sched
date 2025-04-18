import {
	NextResponse,
	type MiddlewareConfig,
	type NextRequest,
} from 'next/server'

const publicRoutes = [
	{ path: '/sign-in', whenAuthenticated: 'redirect' },
	{ path: '/register', whenAuthenticated: 'redirect' },
	{ path: '/pricing', whenAuthenticated: 'next' },
]

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/sign-in'

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	const publicRoute = publicRoutes.find((route) => route.path === path)

	const authToken = request.cookies.get('sched-token')

	if (!authToken && publicRoute) {
		return NextResponse.next()
	}

	if (!authToken && !publicRoute) {
		const redirectUrl = request.nextUrl.clone()

		redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

		return NextResponse.redirect(redirectUrl)
	}

	if (
		authToken &&
		publicRoute &&
		publicRoute.whenAuthenticated === 'redirect'
	) {
		const redirectUrl = request.nextUrl.clone()

		redirectUrl.pathname = '/appointments'

		return NextResponse.redirect(redirectUrl)
	}

	if (authToken && !publicRoute) {
		// checar se o JWT está expirado
		return NextResponse.next()
	}

	return NextResponse.next()
}

export const config: MiddlewareConfig = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
}
