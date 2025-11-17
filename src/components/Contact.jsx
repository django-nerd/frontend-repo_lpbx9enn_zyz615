import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      budget: form.get('budget'),
      message: form.get('message')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus('success')
      setMessage('Thanks! We\'ll be in touch within 24 hours.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again or email hello@pulsedigital.com')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Let’s build your growth engine</h2>
            <p className="mt-4 text-gray-600">Tell us about your goals and we’ll craft a tailored plan to acquire, convert, and retain high‑value customers.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• Dedicated strategist and weekly reporting</li>
              <li>• Measurement plan and analytics setup</li>
              <li>• Creative testing roadmap and rapid experiments</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 p-6 bg-white/70 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="text-sm font-semibold">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Jane Doe"/>
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-semibold">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="jane@company.com"/>
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-semibold">Company</label>
                <input name="company" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Acme Inc."/>
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-semibold">Budget</label>
                <select name="budget" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900">
                  <option value="">Select range</option>
                  <option value="<$5k">Less than $5k</option>
                  <option value="$5k-$20k">$5k - $20k</option>
                  <option value=">$20k">$20k+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">Project details</label>
                <textarea name="message" required rows="4" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Tell us about your goals, audience, and timeline..."/>
              </div>
            </div>
            <button disabled={status==='loading'} className="mt-4 inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
              {status==='loading' ? 'Sending...' : 'Request proposal'}
            </button>
            {message && (
              <p className={`mt-3 text-sm ${status==='success' ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
