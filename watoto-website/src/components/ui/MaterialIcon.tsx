import type { CSSProperties } from 'react'

interface MaterialIconProps {
  name: string
  className?: string
  filled?: boolean
  size?: number
  style?: CSSProperties
}

export default function MaterialIcon({ name, className = '', filled = false, size, style }: MaterialIconProps) {
  if (name === 'format_quote') {
    return (
      <svg
        className={`inline-block shrink-0 fill-current ${className}`}
        viewBox="0 0 24 24"
        width={size || '1em'}
        height={size || '1em'}
        aria-hidden="true"
        style={{ width: size, height: size, ...style }}
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    )
  }

  return (
    <span
      className={`material-symbols-outlined ${filled ? 'material-symbols-filled' : ''} ${className}`}
      style={{ ...(size ? { fontSize: size } : {}), ...style }}
    >
      {name}
    </span>
  )
}
