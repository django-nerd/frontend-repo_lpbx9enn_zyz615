import { Sparkles, Target, BarChart3, Rocket } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Brand Positioning',
    text: 'Clarify your message and stand out with a distinct, memorable identity that resonates.',
  },
  {
    icon: Target,
    title: 'Performance Ads',
    text: 'High‑intent campaigns optimized across search, social, and programmatic to drive ROI.',
  },
  {
    icon: BarChart3,
    title: 'CRO & Analytics',
    text: 'Full‑funnel tracking and conversion rate optimization turning interest into action.',
  },
  {
    icon: Rocket,
    title: 'Go‑to‑Market Sprints',
    text: 'Rapid-growth experiments to validate offers and accelerate revenue in weeks, not months.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">What we do</h2>
          <p className="mt-3 text-gray-600">A focused, high‑impact suite of services to turn visitors into customers.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-white/70 backdrop-blur hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-600 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-extrabold text-lg">{title}</h3>
              <p className="text-gray-600 text-sm mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
