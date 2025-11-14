import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [editable, setEditable] = useState(true)
  const [data, setData] = useState({
    brand: 'YourName',
    title: 'Designer & Frontend Developer',
    subtitle: "I design and build playful, modern interfaces that feel great to use.",
    workHeading: 'Selected Work',
    projects: [
      { title: 'Playful Shop UX', description: 'Revamped checkout flow for a DTC brand, improving conversion by 18%.', tags: ['Product', 'UX', 'Frontend'] },
      { title: 'SaaS Dashboard', description: 'Designed a modular analytics system with real-time charts for SMBs.', tags: ['Design', 'System', 'React'] },
      { title: 'Mobile Concepts', description: 'Explorations in motion and micro-interactions for a social app.', tags: ['iOS', 'Android', 'Motion'] },
      { title: 'Portfolio v3', description: 'My latest personal site — performant, accessible, and fun.', tags: ['Next.js', 'Design', 'Brand'] },
    ],
    footerHeading: "Let's build something great together.",
    footerSub: 'Available for freelance and full-time roles.'
  })

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-data')
    if (stored) setData(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-data', JSON.stringify(data))
  }, [data])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/50">
      <Navbar editable={editable} data={data} setData={setData} />
      <Hero editable={editable} data={data} setData={setData} />
      <Projects editable={editable} data={data} setData={setData} />
      <Footer editable={editable} data={data} setData={setData} />

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setEditable(!editable)}
          className="rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-800"
        >
          {editable ? 'Exit Edit Mode' : 'Edit This Page'}
        </button>
      </div>
    </div>
  )
}

export default App
