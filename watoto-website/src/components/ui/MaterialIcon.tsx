interface MaterialIconProps {
  name: string
  className?: string
  filled?: boolean
  size?: number
}

export default function MaterialIcon({ name, className = '', filled = false, size }: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'material-symbols-filled' : ''} ${className}`}
      style={size ? { fontSize: size } : undefined}
    >
      {name}
    </span>
  )
}
