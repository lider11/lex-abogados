import './globals.css'

export const metadata = {
  title: 'Lex Abogados | Soluciones legales estratégicas',
  description: 'Firma legal boutique con enfoque corporativo y litigio estratégico.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-950">{children}</body>
    </html>
  )
}
