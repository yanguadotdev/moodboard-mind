interface CircleProps extends React.HTMLAttributes<HTMLSpanElement> {
  radius: number
  color: string
  strokeWidth: number
  className?: string
}

export function Circle({ radius, color, strokeWidth, className, ...props }: CircleProps) {
  const cssProperties = {
    '--size': `${radius * 2}px`,
    '--color': color,
    '--strokeWidth': `${strokeWidth}px`
  } as React.CSSProperties

  return (
    <span
      className={`
                box-border
                inline-block size-(--size) 
                border-(length:--strokeWidth)
                border-(--color)
                rounded-full
                ${className || ''}
            `}
      style={cssProperties}
      {...props}
    ></span>
  )
}
