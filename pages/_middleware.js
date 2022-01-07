
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req) {
  const { geo, nextUrl} = req

  const topLevelDomain = nextUrl.origin.split('.')[1]
  if(topLevelDomain !== geo.country.toLowerCase()){
    if(geo.country === "AR"){
      return NextResponse.rewrite('https://carbula.com')
    }
    if(geo.country === "CL"){
      return NextResponse.rewrite('https://carbula.cl')
    }
    if(geo.country === "MX"){
      return NextResponse.rewrite('https://carbula.mx')
    }
    if(geo.country === "UY"){
      return NextResponse.rewrite('https://carbula.uy')
    }
  }
}