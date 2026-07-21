import { useEffect, useRef, type ReactNode } from 'react'

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate-in'
  | 'flip-up'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const initialClasses: string[] = ['opacity-0', 'transition-all', 'will-change-transform']

    switch (animation) {
      case 'fade-up':
        initialClasses.push('translate-y-12')
        break
      case 'fade-down':
        initialClasses.push('-translate-y-12')
        break
      case 'fade-left':
        initialClasses.push('translate-x-14')
        break
      case 'fade-right':
        initialClasses.push('-translate-x-14')
        break
      case 'zoom-in':
        initialClasses.push('scale-90')
        break
      case 'zoom-out':
        initialClasses.push('scale-105')
        break
      case 'rotate-in':
        initialClasses.push('rotate-6', 'scale-90', 'translate-y-8')
        break
      case 'flip-up':
        initialClasses.push('[transform:rotateX(25deg)]', 'translate-y-10')
        break
      default:
        initialClasses.push('translate-y-12')
    }

    el.classList.add(...initialClasses)
    el.style.transitionDuration = `${duration}ms`
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              'opacity-100',
              'translate-y-0',
              'translate-x-0',
              'scale-100',
              'rotate-0',
              '[transform:rotateX(0deg)]'
            )
            entry.target.classList.remove(
              'opacity-0',
              'translate-y-12',
              '-translate-y-12',
              'translate-x-14',
              '-translate-x-14',
              'scale-90',
              'scale-105',
              'rotate-6',
              '[transform:rotateX(25deg)]'
            )
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animation, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
