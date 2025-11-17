import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-blue-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <footer className="py-10 border-t border-gray-200/70 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Pulse Digital. All rights reserved.</p>
          <div className="text-sm text-gray-600">Built with love and a lot of coffee.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
