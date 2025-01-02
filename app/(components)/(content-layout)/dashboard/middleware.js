import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('authToken'); // Check for auth token in cookies

  // Protected routes (all subroutes under /dashboard and /social)
  const protectedRoutes = ['/dashboard', '/social'];

  // Check if the request is for a protected route
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token) {
    const loginUrl = new URL('/login', request.url); // Redirect to login page
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next(); // Allow request to proceed if authenticated
}

// Apply middleware to protected paths
export const config = {
  matcher: ['/dashboard/:path*', '/social/:path*'], // Match all subroutes
};
