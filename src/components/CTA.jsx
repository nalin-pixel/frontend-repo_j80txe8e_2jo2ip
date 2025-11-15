import { Apple, Play } from 'lucide-react'

export default function CTA() {
  return (
    <section id="download" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Your vibe deserves the spotlight</h2>
            <p className="mt-3 text-gray-300">Start free, upgrade anytime. Available on iOS and Android.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-gray-900 font-semibold">
                <Apple size={18} />
                Download on iOS
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 font-medium">
                <Play size={18} />
                Get it on Android
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <ul className="space-y-3 text-sm text-gray-200">
                <li>• No sign-up needed to try</li>
                <li>• Works with your favorite chat apps</li>
                <li>• Smart suggestions that adapt to your style</li>
                <li>• Private by design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
