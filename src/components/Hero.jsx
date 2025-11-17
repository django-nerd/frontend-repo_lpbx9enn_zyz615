import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-semibold">Tech • Interactive • Modern</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Turn traffic into revenue with bold digital marketing.
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            We blend data, creativity, and cutting‑edge tech to launch campaigns that capture attention and convert browsers into buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">Get a free growth plan</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 transition">See how we grow brands</a>
          </div>
          <div className="flex items-center gap-6 pt-2">
            <div>
              <p className="text-3xl font-extrabold">4.9★</p>
              <p className="text-xs text-gray-500">Average client rating</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">+220%</p>
              <p className="text-xs text-gray-500">Avg. ROI in 90 days</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">$50M+</p>
              <p className="text-xs text-gray-500">Tracked client revenue</p>
            </div>
          </div>
        </div>
        <div className="relative aspect-square rounded-2xl ring-1 ring-black/5 overflow-hidden">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}
