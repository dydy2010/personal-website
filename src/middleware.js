import { NextResponse } from "next/server";

const locales = ["en", "de", "es", "zh"];

// Any path that doesn't start with a locale gets sent to /en,
// keeping the rest of the path (so old links like /story still work).
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (locales.includes(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // skip Next internals and any file request (resume.pdf, icon.svg, …)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
