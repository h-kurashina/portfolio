import { useEffect, useRef } from 'react'

export function Pointer() {
  const pointer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = pointer.current
    const media = matchMedia('(min-width: 960px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    if (!node) return
    let frame = 0
    let previousTime = 0
    let x = 0
    let y = 0
    let followX = 0
    let followY = 0

    const draw = (time: number) => {
      const amount = 1 - Math.pow(.9, Math.min(time - previousTime, 64) / (1000 / 60))
      previousTime = time
      followX += (x - followX) * amount
      followY += (y - followY) * amount
      node.style.setProperty('--follow-x', `${followX}px`)
      node.style.setProperty('--follow-y', `${followY}px`)
      if (Math.abs(x - followX) + Math.abs(y - followY) > .1) frame = requestAnimationFrame(draw)
      else frame = 0
    }
    const hide = () => {
      node.classList.remove('is-visible')
      cancelAnimationFrame(frame)
      frame = 0
    }
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== 'mouse') return hide()
      x = event.clientX
      y = event.clientY
      if (!node.classList.contains('is-visible')) { followX = x; followY = y }
      node.classList.add('is-visible')
      node.classList.toggle('is-active', event.target instanceof Element && Boolean(event.target.closest('button, a')))
      node.style.setProperty('--pointer-x', `${x}px`)
      node.style.setProperty('--pointer-y', `${y}px`)
      if (!frame) { previousTime = performance.now(); frame = requestAnimationFrame(draw) }
    }
    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('pointerleave', hide)
    window.addEventListener('blur', hide)
    media.addEventListener('change', hide)
    return () => {
      hide()
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', hide)
      window.removeEventListener('blur', hide)
      media.removeEventListener('change', hide)
    }
  }, [])

  return <div ref={pointer} className="custom-pointer" aria-hidden="true"><span className="pointer-dot" /><span className="pointer-ring" /></div>
}
