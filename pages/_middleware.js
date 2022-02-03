import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req) {
    const url = req.nextUrl
    const { pathname } = url

    if (pathname === "/overwritten") {
        console.log("overwritting")
        return NextResponse.rewrite('https://example.com') // rewrite to old rails website if not active and url is the same
    }
}
