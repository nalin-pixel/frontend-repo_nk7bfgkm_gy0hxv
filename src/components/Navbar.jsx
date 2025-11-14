import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar({ editable, data, setData }) {
  const [open, setOpen] = useState(false)

  const handleChange = (key, value) => setData({ ...data, [key]: value })

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/50 backdrop-blur px-4 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <button className="sm:hidden inline-flex" onClick={() => setOpen(!open)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
            {editable ? (
              <input
                value={data.brand}
                onChange={(e) => handleChange('brand', e.target.value)}
                className="bg-transparent text-gray-900 font-semibold text-lg outline-none"
              />
            ) : (
              <div className="text-gray-900 font-semibold text-lg">{data.brand}</div>
            )}
          </div>
          <nav className={`sm:flex items-center gap-6 ${open ? 'block' : 'hidden sm:block'}`}>
            {['About','Work','Contact','Resume'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
