import Spline from '@splinetool/react-spline'
import EditableText from './EditableText'

export default function Hero({ editable, data, setData }) {
  const handleChange = (key, value) => setData({ ...data, [key]: value })

  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-24">
            <div className="space-y-6">
              <EditableText
                value={data.title}
                onChange={(v) => handleChange('title', v)}
                editable={editable}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
                placeholder="Your Name — Product Designer"
              />
              <EditableText
                value={data.subtitle}
                onChange={(v) => handleChange('subtitle', v)}
                editable={editable}
                multiline
                className="text-base sm:text-lg text-gray-700 leading-relaxed"
                placeholder="I craft playful, modern product experiences across web and mobile."
              />
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition">View Work</button>
                <button className="rounded-full ring-1 ring-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-100 transition">Contact</button>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
