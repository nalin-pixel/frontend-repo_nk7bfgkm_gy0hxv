import { useEffect, useRef, useState } from 'react'

export default function EditableText({
  value,
  onChange,
  className = '',
  placeholder = '',
  multiline = false,
  editable = false,
}) {
  const [draft, setDraft] = useState(value || '')
  const ref = useRef(null)

  useEffect(() => {
    setDraft(value || '')
  }, [value])

  useEffect(() => {
    if (editable && ref.current) {
      ref.current.focus()
    }
  }, [editable])

  const Tag = multiline ? 'textarea' : 'input'

  if (!editable) {
    return (
      <span className={className}>{value || placeholder}</span>
    )
  }

  return (
    <Tag
      ref={ref}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => onChange?.(draft)}
      onKeyDown={(e) => {
        if (!multiline && e.key === 'Enter') {
          e.currentTarget.blur()
        }
      }}
      placeholder={placeholder}
      className={`bg-white/60 backdrop-blur text-gray-900 placeholder-gray-400 outline-none ring-2 ring-blue-200 focus:ring-blue-400 rounded px-2 py-1 ${multiline ? 'min-h-[96px] resize-y' : ''} ${className}`}
    />
  )
}
