import { useState } from 'react'
import { Menu, X, Smartphone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-indigo-500 grid place-items-center text-white shadow-sm">
              <Smartphone size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">Rizz Mania</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#testimonials" className="hover:text-gray-900">Love</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#download" className="px-4 py-2 rounded-full border border-black/10 hover:border-black/20 text-sm font-medium">Download</a>
            <a href="#download" className="px-4 py-2 rounded-full bg-gradient-to-tr from-fuchsia-600 to-indigo-600 text-white shadow hover:shadow-md text-sm font-semibold">Get the App</a>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-4 space-y-3 text-sm">
            <a href="#features" className="block">Features</a>
            <a href="#how" className="block">How it works</a>
            <a href="#testimonials" className="block">Love</a>
            <a href="#faq" className="block">FAQ</a>
            <div className="pt-3 grid grid-cols-2 gap-3">
              <a href="#download" className="px-4 py-2 rounded-full border border-black/10 text-center text-sm font-medium">Download</a>
              <a href="#download" className="px-4 py-2 rounded-full bg-gradient-to-tr from-fuchsia-600 to-indigo-600 text-white text-center text-sm font-semibold">Get the App</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
