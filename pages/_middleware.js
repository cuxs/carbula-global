
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req) {
  const { geo, url} = req
  const country = geo.country || 'US'

  console.log('url', url)
  console.log('geo', geo)
  if(geo.country === "AR"){
    return NextResponse.rewrite('https://google.com')
  }

  // return NextResponse.rewrite()
}