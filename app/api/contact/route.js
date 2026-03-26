import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    office: 'Ciudad de México',
    phone: '+52 55 5555 5555',
    email: 'contacto@lexabogados.mx'
  })
}
