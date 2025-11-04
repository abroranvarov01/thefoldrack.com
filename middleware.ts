import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "songmics-stainless-gullwing",
  "songmics-foldable-2-level",
  "apexchaser-extendable-wall-mounted",
  "whitmor-foldable-clothes",
  "augmirr-stainless-outdoor",
  "honey-can-do-collapsible-bamboo",
  "polder-wall-mount-accordion",
  "leifheit-pegasus-150-black",
  "joseph-eclipse-adjustable",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://slickcarwash.online")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/product/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("car", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/slick"],
};
