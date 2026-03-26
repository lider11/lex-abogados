const services = [
  {
    title: 'Litigio estratégico',
    description: 'Representación integral en disputas civiles, mercantiles y administrativas con enfoque en resultados.'
  },
  {
    title: 'Compliance corporativo',
    description: 'Diseño de políticas internas, gestión de riesgos regulatorios y auditorías preventivas.'
  },
  {
    title: 'Contratación internacional',
    description: 'Estructuración de contratos multijurisdiccionales con protección patrimonial.'
  }
]

const links = ['Inicio', 'Servicios', 'Equipo', 'Casos', 'Contacto']

async function getContact() {
  const fallback = { office: 'Ciudad de México' }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/contact`, { cache: 'no-store' })
    if (!res.ok) return fallback
    return res.json()
  } catch {
    return fallback
  }
}

export default async function HomePage() {
  const contact = await getContact()

  return (
    <div className="min-h-screen bg-slate-950 text-white">
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

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-gold">Firma legal boutique</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Defensa jurídica <span className="gold-gradient">de alto impacto</span>
            </h1>
            <p className="mb-8 max-w-xl text-slate-300">
              Plataforma web en Next.js (React + Node) y Tailwind, compatible con importadores que requieren framework en raíz.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Sede principal</p>
            <p className="mt-2 text-3xl font-semibold">{contact.office}</p>
            <p className="mt-4 text-slate-300">Consultoría legal para compañías, founders y grupos familiares de alto patrimonio.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-bold">Servicios clave</h2>
            <span className="text-sm text-slate-400">Respuesta en menos de 24 horas</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-brand-gold/40">
                <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
