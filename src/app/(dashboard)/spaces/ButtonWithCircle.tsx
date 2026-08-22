import { Circle } from '@/components/ui/circle'

export function ButtonWithCircle({
  text,
  onClick
}: {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className='
                bg-white
                text-[#748297] text-[14px] uppercase
                flex justify-center items-center
                h-10 px-3.75 rounded-[20px] gap-3
                cursor-pointer
                hover:drop-shadow-[8px_8px_10px_rgb(116_130_151/30%)]
            '
      onClick={onClick}
    >
      <Circle radius={9} color='#ff5924' strokeWidth={3} />
      {text}
    </button>
  )
}
