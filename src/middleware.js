import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["es", "en"],

  // Used when no locale matches
  defaultLocale: "es"
});

export const config = {
  // Match only internationalized pathnames "/reading/:url*" '/:path*'
  matcher: ["/", "/(es|en)/:path*", "/reading/:url*", "/((?!_next|_vercel|.*\\..*).*)"]
};