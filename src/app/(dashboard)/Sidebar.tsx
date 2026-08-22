import BrandingWordIcon from '@/assets/icons/branding-word.svg'
import Settings from '@/assets/icons/gear.svg'
import Grid3 from '@/assets/icons/grid_3.svg'

export function SideBar() {
  return (
    <div className='h-full flex flex-col items-center justify-between py-8 text-[#748297]'>
      <div>
        <BrandingWordIcon className='w-6 h-23.75' />
      </div>
      <div>
        <ul className='text-[24px] flex flex-col gap-8 [&>li]:cursor-pointer [&>li]:hover:scale-110 transition-all'>
          <li>
            <Grid3 />
          </li>
          <li className='hover:rotate-180 transition-all'>
            <Settings />
          </li>
        </ul>
      </div>
    </div>
  )
}
