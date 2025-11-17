import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-600"></span>
          <span className="font-extrabold tracking-tight text-xl">Pulse Digital</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#case-studies" className="text-gray-700 hover:text-gray-900">Case Studies</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition">Get Proposal</a>
        </nav>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
