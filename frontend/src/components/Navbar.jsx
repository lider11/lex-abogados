const links = ['Inicio', 'Servicios', 'Equipo', 'Casos', 'Contacto']

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold tracking-wide text-white">
          <span className="gold-gradient">LEX</span> Abogados
        </div>
        <ul className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link} className="cursor-pointer transition hover:text-brand-gold">
              {link}
            </li>
          ))}
        </ul>
        <button className="rounded border border-brand-gold px-4 py-2 text-xs font-medium uppercase tracking-wider text-brand-gold transition hover:bg-brand-gold hover:text-slate-950">
          Consulta
        </button>
      </nav>
    </header>
  )
}
