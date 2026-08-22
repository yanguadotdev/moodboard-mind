'use client'

import { useRef } from 'react'
import { Circle } from '@/components/ui/circle'

const QUANTITY_OF_CIRCLES = 16
const CIRCLE_RADIUS = 16
const COLORS = [
  '#75ffc0',
  '#c0c2ce',
  '#ff8fa4',
  '#000',
  '#19aad1',
  '#17c37b',
  '#ffdcd0',
  '#166ff4',
  '#cdff06',
  '#f96',
  '#bfb5d7',
  '#96cbd1',
  '#cba0aa',
  '#fdf06f',
  '#7a30cf',
  '#ef3e4a'
]

type SelectedCircle = {
  circle: HTMLDivElement | null
  prevX: number | null
  prevY: number | null
}

export function ColorChooser({ size, onChooseColor }: { size: number; onChooseColor: (color: string) => void }) {
  const selectedCircle = useRef<SelectedCircle>({
    circle: null,
    prevX: null,
    prevY: null
  })

  const circles = Array(QUANTITY_OF_CIRCLES)
  const RADIUS = size / 2 - CIRCLE_RADIUS

  for (let i = 0; i < QUANTITY_OF_CIRCLES; i++) {
    const currentColor = COLORS[i]
    const x = RADIUS * Math.cos(((i + 1) * 2 * Math.PI) / QUANTITY_OF_CIRCLES)
    const y = RADIUS * Math.sin(((i + 1) * 2 * Math.PI) / QUANTITY_OF_CIRCLES)
    circles[i] = (
      <div
        key={currentColor}
        style={
          {
            '--x': `${x}px`,
            '--y': `${y}px`
          } as React.CSSProperties
        }
      >
        <Circle
          data-color={currentColor}
          className='
                        absolute
                        left-[calc(50%-16px+var(--x))]
                        top-[calc(50%-16px+var(--y))]
                        hover:cursor-pointer hover:scale-150
                        transition-all duration-200
                    '
          radius={CIRCLE_RADIUS}
          strokeWidth={4}
          color={currentColor}
        />
      </div>
    )
  }

  async function handleSelectedColor(event: React.MouseEvent<HTMLDivElement>) {
    const circle = event.target as HTMLElement
    if (circle.tagName !== 'SPAN' || !circle.dataset.color || selectedCircle.current.circle === circle) return

    const previousCircle = selectedCircle.current.circle
    const newCircle = circle as HTMLDivElement

    if (previousCircle) {
      previousCircle.style.scale = '100%'
      previousCircle.style.left = `${selectedCircle.current.prevX}px`
      previousCircle.style.top = `${selectedCircle.current.prevY}px`
      previousCircle.style.pointerEvents = 'auto'
    }

    selectedCircle.current = {
      circle: newCircle,
      prevX: newCircle.offsetLeft,
      prevY: newCircle.offsetTop
    }

    newCircle.style.scale = '400%'
    const newXY = `calc(50% - ${newCircle.offsetWidth / 2}px)`
    newCircle.style.left = newCircle.style.top = newXY
    newCircle.style.pointerEvents = 'none'

    onChooseColor(circle.dataset.color)
  }

  return (
    <div className='relative' style={{ width: size, height: size }} onClick={handleSelectedColor}>
      {circles}
    </div>
  )
}
