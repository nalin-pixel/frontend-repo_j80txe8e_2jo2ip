import { Wand2, MessageCircle, Heart, Shield, Zap, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Wand2,
    title: 'AI-Powered Openers',
    desc: 'Get context-aware conversation starters for any situation, anywhere.'
  },
  {
    icon: MessageCircle,
    title: 'Reply Assist',
    desc: 'Keep the vibe going with smooth, on-point responses in real time.'
  },
  {
    icon: Heart,
    title: 'Rizz Coach',
    desc: 'Learn playful banter, witty comebacks, and confident delivery.'
  },
  {
    icon: Shield,
    title: 'Safe Mode',
    desc: 'Built-in guardrails to keep chats respectful and comfortable.'
  },
  {
    icon: Zap,
    title: 'Quick Actions',
    desc: 'Tap-ready prompts when the moment calls for something clever.'
  },
  {
    icon: Sparkles,
    title: 'Personalized Vibe',
    desc: 'Tune the tone: flirty, funny, wholesome—whatever fits you.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">What makes it magic</h2>
          <p className="mt-3 text-gray-600">Thoughtfully designed to help you express yourself, effortlessly.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 p-6 bg-gradient-to-b from-gray-50 to-white hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 text-white grid place-items-center shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
