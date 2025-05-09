import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Skip authentication for API routes if needed
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  const basicAuth = request.headers.get('authorization')
  
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')
    
    // Change these credentials to what you want your daughter to use
    if (user === 'isabel' && pwd === 'dictionary2024') {
      return NextResponse.next()
    }
  }
  
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Isabel\'s Dictionary - Password Required"',
    },
  })
}

export const config = {
  matcher: '/:path*',
} 