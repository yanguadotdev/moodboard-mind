export function MansoryGrid() {
  const cards = []
  for (let i = 0; i < heights.length; i++) {
    cards.push(<Card key={i} height={heights[i]} />)
  }

  return <div className='columns-3 gap-6 space-y-6 pb-20'>{cards}</div>
}

const heights = [200, 389, 502, 300, 314, 403, 313, 424, 167, 461]

function Card({ height }: { height: number }) {
  return (
    <div
      className='
                bg-white
                break-inside-avoid
                rounded-sm
                cursor-pointer
                shadow-md
                transition duration-200
                outline-[#B8C3D3]
                hover:outline-3
            '
      style={{ height: `${height}px` }}
    ></div>
  )
}
