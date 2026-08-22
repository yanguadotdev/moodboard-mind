import { SpaceForm } from './(SpaceForm)/SpaceForm'
import { ButtonWithCircle } from './ButtonWithCircle'

export function Spaces() {
  return (
    <div className='flex justify-between items-center pb-1.5 border-b border-b-[#D7DCE2]'>
      <div>
        <h1 className='text-[#383f4a] text-[54px] font-normal font-serif italic'>All Spaces</h1>
      </div>
      <div>
        <ButtonWithCircle text='Create a new space' />
      </div>
    </div>
  )
}
