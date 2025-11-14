import EditableText from './EditableText'

export default function Projects({ editable, data, setData }) {
  const handleProjectChange = (index, key, value) => {
    const next = [...data.projects]
    next[index] = { ...next[index], [key]: value }
    setData({ ...data, projects: next })
  }

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <EditableText
            value={data.workHeading}
            onChange={(v) => setData({ ...data, workHeading: v })}
            editable={editable}
            className="text-2xl sm:text-3xl font-bold text-gray-900"
            placeholder="Selected Work"
          />
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">See all →</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.projects.map((p, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[16/10] bg-gradient-to-br from-indigo-100 via-white to-rose-50" />
              <div className="p-5 space-y-2">
                <EditableText
                  value={p.title}
                  onChange={(v) => handleProjectChange(i, 'title', v)}
                  editable={editable}
                  className="text-lg font-semibold text-gray-900"
                  placeholder="Project Title"
                />
                <EditableText
                  value={p.description}
                  onChange={(v) => handleProjectChange(i, 'description', v)}
                  editable={editable}
                  multiline
                  className="text-sm text-gray-700"
                  placeholder="Short one-liner about the project, your role, and impact."
                />
                <div className="flex gap-2 pt-1">
                  {(p.tags || []).map((t, ti) => (
                    <span key={ti} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
