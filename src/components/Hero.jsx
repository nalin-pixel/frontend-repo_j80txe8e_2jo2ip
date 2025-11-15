import { Sparkles, ArrowRight, Apple, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-fuchsia-50 via-violet-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-medium text-gray-700 shadow-sm">
              <Sparkles size={16} className="text-fuchsia-600" />
              Just launched on the App Store & Play Store
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
              Rizz Mania
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              The ultimate wingman in your pocket. Craft witty openers, keep conversations flowing, and turn awkward silences into smooth moments.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#download" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-tr from-fuchsia-600 to-indigo-600 text-white font-semibold shadow hover:shadow-md">
                Get the app
                <ArrowRight size={18} />
              </a>
              <a href="#download" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 bg-white font-medium">
                <Apple size={18} />
                App Store
              </a>
              <a href="#download" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 bg-white font-medium">
                <Play size={18} />
                Play Store
              </a>
            </div>

            <p className="mt-3 text-sm text-gray-500">Free to try. No sign-up required.</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-fuchsia-200/50 via-violet-200/40 to-indigo-200/40 rounded-3xl blur-2xl" />
            <div className="relative rounded-[24px] border border-black/10 bg-white p-4 shadow-xl">
              <div className="aspect-[9/19] rounded-[20px] border border-black/10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="h-10 bg-black/90 text-white flex items-center justify-center text-xs tracking-widest">RIZZ MANIA</div>
                <div className="p-4 space-y-3">
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                  <div className="h-3 w-40 bg-gray-200 rounded" />
                  <div className="h-3 w-28 bg-gray-200 rounded" />
                  <div className="h-48 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-indigo-500" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 bg-gray-100 rounded" />
                    <div className="h-10 bg-gray-100 rounded" />
                    <div className="h-10 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
