
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req) {
  if (process.env.NODE_ENV !== 'development') {

    const { geo, nextUrl } = req

    const topLevelDomain = nextUrl.origin.split('.').pop()
    if (topLevelDomain !== geo.country.toLowerCase()) {
      if (geo.country === "AR" && topLevelDomain != "com") {
        return NextResponse.rewrite("https://carbula.com")
      }
      if (geo.country === "CL") {
        return NextResponse.rewrite('https://carbula.cl')
      }
      if (geo.country === "MX") {
        return NextResponse.rewrite('https://carbula.mx')
      }
      if (geo.country === "UY") {
        return NextResponse.rewrite('https://carbula.uy')
      }
    }
  }

}