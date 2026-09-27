import { useState, useRef, useEffect, useCallback } from 'react'
import MaterialIcon from './MaterialIcon'

export interface DropdownOption {
  value: string
  label: string
  subtitle?: string
  icon?: string
}

interface CustomDropdownProps {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  id?: string
  variant?: 'light' | 'dark'
  className?: string
  buttonClassName?: string
  dropdownClassName?: string
  disabled?: boolean
  error?: boolean
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  id,
  variant = 'light',
  className = '',
  buttonClassName = '',
  dropdownClassName = '',
  disabled = false,
  error = false,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDark = variant === 'dark'

  const selectedOption = options.find((opt) => opt.value === value)

  const handleOutsideClick = useCallback((e: MouseEvent | TouchEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        return
      }

      if (!isOpen) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
          if (containerRef.current?.contains(document.activeElement)) {
            e.preventDefault()
            setIsOpen(true)
          }
        }
        return
      }

      const currentIndex = options.findIndex((opt) => opt.value === value)
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        const nextIndex = (currentIndex + 1) % options.length
        onChange(options[nextIndex].value)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        const prevIndex = (currentIndex - 1 + options.length) % options.length
        onChange(options[prevIndex].value)
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setIsOpen(false)
      }
    },
    [isOpen, options, value, onChange]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('touchstart', handleOutsideClick, { passive: true })
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleOutsideClick, handleKeyDown])

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Sleek Minimalist Trigger Button */}
      <button
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between text-left transition-all duration-200 cursor-pointer rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm outline-none select-none ${
          isDark
            ? `bg-pure-white/5 border ${
                error
                  ? 'border-red-500 ring-2 ring-red-500/20'
                  : isOpen
                  ? 'border-vibrant-green ring-2 ring-vibrant-green/20'
                  : 'border-pure-white/15 hover:border-vibrant-green/60'
              } text-pure-white`
            : `bg-surface border ${
                error
                  ? 'border-red-500 ring-2 ring-red-500/20'
                  : isOpen
                  ? 'border-vibrant-green ring-2 ring-vibrant-green/20 shadow-sm'
                  : 'border-outline-variant/60 hover:border-vibrant-green/60 shadow-2xs'
              } text-deep-black`
        } ${disabled ? 'opacity-60 cursor-not-allowed bg-surface-container-low' : ''} ${buttonClassName}`}
      >
        <div className="flex items-center gap-2 min-w-0 pr-2">
          {selectedOption?.icon && (
            <MaterialIcon
              name={selectedOption.icon}
              className={`text-sm shrink-0 ${isDark ? 'text-vibrant-green' : 'text-vibrant-green'}`}
            />
          )}
          <div className="truncate flex items-baseline gap-1.5">
            {selectedOption ? (
              <>
                <span className={`font-semibold truncate ${isDark ? 'text-pure-white' : 'text-deep-black'}`}>
                  {selectedOption.label}
                </span>
                {selectedOption.subtitle && (
                  <span className={`hidden sm:inline text-xs truncate ${isDark ? 'text-pure-white/50' : 'text-on-surface-variant/70'}`}>
                    — {selectedOption.subtitle}
                  </span>
                )}
              </>
            ) : (
              <span className={isDark ? 'text-pure-white/40' : 'text-on-surface-variant/60'}>
                {placeholder}
              </span>
            )}
          </div>
        </div>

        <div className={`flex items-center shrink-0 pl-1 ${isDark ? 'text-pure-white/60' : 'text-on-surface-variant'}`}>
          <MaterialIcon
            name="expand_more"
            className={`text-lg transition-transform duration-200 ease-out ${
              isOpen ? 'rotate-180 text-vibrant-green' : ''
            }`}
          />
        </div>
      </button>

      {/* Lightweight, Clean Popover Menu */}
      {isOpen && (
        <div
          role="listbox"
          className={`absolute left-0 right-0 top-full mt-1.5 z-[100] rounded-xl shadow-xl overflow-hidden animate-fadeIn max-h-64 sm:max-h-72 overflow-y-auto p-1.5 ${
            isDark
              ? 'bg-[#181C14] border border-pure-white/15 shadow-deep-black/60'
              : 'bg-surface border border-outline-variant/40 shadow-deep-black/10'
          } ${dropdownClassName}`}
        >
          {options.map((opt) => {
            const isSelected = opt.value === value

            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt.value)
                  setIsOpen(false)
                }}
                className={`group px-3 py-2 sm:py-2.5 rounded-lg cursor-pointer transition-colors duration-150 flex items-center justify-between gap-2 text-left ${
                  isDark
                    ? isSelected
                      ? 'bg-vibrant-green/20 text-pure-white font-semibold'
                      : 'text-pure-white/90 hover:bg-pure-white/10'
                    : isSelected
                    ? 'bg-vibrant-green/10 text-vibrant-green font-semibold'
                    : 'text-deep-black hover:bg-surface-container-low'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {opt.icon && (
                    <MaterialIcon
                      name={opt.icon}
                      className={`text-sm shrink-0 transition-colors ${
                        isSelected
                          ? 'text-vibrant-green'
                          : isDark
                          ? 'text-pure-white/50 group-hover:text-vibrant-green'
                          : 'text-on-surface-variant/70 group-hover:text-vibrant-green'
                      }`}
                    />
                  )}
                  <div className="min-w-0">
                    <span
                      className={`text-xs sm:text-sm block leading-snug truncate ${
                        isSelected
                          ? 'font-bold text-vibrant-green'
                          : isDark
                          ? 'font-medium text-pure-white'
                          : 'font-medium text-deep-black'
                      }`}
                    >
                      {opt.label}
                    </span>
                    {opt.subtitle && (
                      <span
                        className={`text-[11px] block leading-tight truncate ${
                          isSelected
                            ? isDark
                              ? 'text-pure-white/70'
                              : 'text-vibrant-green/80'
                            : isDark
                            ? 'text-pure-white/50'
                            : 'text-on-surface-variant/70'
                        }`}
                      >
                        {opt.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Clean, Subtle Checkmark (Shown ONLY when selected) */}
                {isSelected && (
                  <MaterialIcon
                    name="check"
                    className="text-vibrant-green text-base font-bold shrink-0 ml-1.5"
                  />
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
