import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ServiceCard from './components/ServiceCard'

const services = [
  {
    title: 'Litigio estratégico',
    description: 'Representación integral en disputas civiles, mercantiles y administrativas con enfoque en resultados medibles.'
  },
  {
    title: 'Compliance corporativo',
    description: 'Diseño de políticas internas, gestión de riesgos regulatorios y auditorías preventivas para empresas en crecimiento.'
  },
  {
    title: 'Contratación internacional',
    description: 'Estructuración de contratos multijurisdiccionales con protección patrimonial y cláusulas de resolución de conflictos.'
  }
]

export default function App() {
  const [office, setOffice] = useState('Ciudad de México')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/contact`)
      .then((res) => res.json())
      .then((data) => setOffice(data.office))
      .catch(() => setOffice('Atención remota LATAM'))
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-gold">Firma legal boutique</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Defensa jurídica <span className="gold-gradient">de alto impacto</span>
            </h1>
            <p className="mb-8 max-w-xl text-slate-300">
              Sitio base en estilo editorial premium, inspirado en el enfoque visual de firmas legales modernas como lexiuridicus.site,
              adaptado para tu nueva marca digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded bg-brand-gold px-6 py-3 text-sm font-semibold text-slate-900 transition hover:brightness-110">
                Agenda una llamada
              </button>
              <button className="rounded border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold">
                Ver casos de éxito
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Sede principal</p>
            <p className="mt-2 text-3xl font-semibold">{office}</p>
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
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} LEX Abogados · Todos los derechos reservados.
      </footer>
    </div>
  )
}
