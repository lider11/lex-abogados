export default function ServiceCard({ title, description }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-brand-gold/40">
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-300">{description}</p>
    </article>
  )
}
