import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Store } from "./lib/types";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_token");

  if (req.nextUrl.pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname === "/admin") {
    try {
      const res = await fetch("http://localhost:3000/api/store", {
        cache: "no-store", // Penting agar data selalu fresh
      });

      if (!res.ok) {
        console.error("API fetch failed in middleware");
        return NextResponse.next();
      }

      const stores: Store[] = await res.json();

      if (stores && stores.length > 0) {
        const firstStoreId = stores[0].id;
        const redirectUrl = new URL(`/admin/${firstStoreId}`, req.url);

        return NextResponse.redirect(redirectUrl);
      }

      return NextResponse.next();
    } catch (error) {
      console.error("Error in middleware:", error);
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin:path*"],
};
