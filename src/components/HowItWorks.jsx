import { Sparkle, MessageSquare, ThumbsUp } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">Three simple steps to boost your confidence and keep the vibe smooth.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-items-center">
              <Sparkle size={18} />
            </div>
            <h3 className="mt-4 font-semibold">Tell us the context</h3>
            <p className="mt-2 text-sm text-gray-600">Share where you are and what you want to say—we’ll handle the wording.</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <div className="h-10 w-10 rounded-xl bg-fuchsia-600 text-white grid place-items-center">
              <MessageSquare size={18} />
            </div>
            <h3 className="mt-4 font-semibold">Get instant suggestions</h3>
            <p className="mt-2 text-sm text-gray-600">Pick from clever, respectful lines tailored to you and the moment.</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <div className="h-10 w-10 rounded-xl bg-violet-600 text-white grid place-items-center">
              <ThumbsUp size={18} />
            </div>
            <h3 className="mt-4 font-semibold">Deliver with confidence</h3>
            <p className="mt-2 text-sm text-gray-600">Use the app’s tips and timing cues to keep conversations fun and natural.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
