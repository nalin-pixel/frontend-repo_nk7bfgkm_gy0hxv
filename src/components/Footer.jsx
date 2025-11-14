import EditableText from './EditableText'

export default function Footer({ editable, data, setData }) {
  return (
    <footer id="contact" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <EditableText
                value={data.footerHeading}
                onChange={(v) => setData({ ...data, footerHeading: v })}
                editable={editable}
                className="text-2xl font-bold text-gray-900"
                placeholder="Let's build something great together."
              />
              <EditableText
                value={data.footerSub}
                onChange={(v) => setData({ ...data, footerSub: v })}
                editable={editable}
                multiline
                className="text-gray-700"
                placeholder="Available for freelance and full-time roles."
              />
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#" className="rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition">Email Me</a>
              <a href="#" className="rounded-full ring-1 ring-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-100 transition">Download Resume</a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} {data.brand}. All rights reserved.</p>
      </div>
    </footer>
  )
}
