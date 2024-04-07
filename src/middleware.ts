import { NextResponse } from "next/server";
import { authService } from "./auth/services/auth-service";

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

const publicRoutes = ["/login", "/registar", "/"];

export async function middleware(req: Request) {
  const pathName = new URL(req.url).pathname;
  if (publicRoutes.includes(pathName)) {
    return NextResponse.next();
  }

  try {
    const session = await authService.isSessionValid();

    if (!session) {
      const isApiRoute = pathName.startsWith("/api");

      if (isApiRoute) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
