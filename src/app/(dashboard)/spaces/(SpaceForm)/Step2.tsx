'use client'

import { useState } from 'react'
import { ColorChooser } from './ColorChooser'

export function Step2() {
  const [color, setColor] = useState('')

  function onChooseColor(color: string) {
    setColor(color)
  }

  const isButtonDisabled = color.length === 0
  return (
    <div className='px-7.5 pt-10 pb-7.5 flex flex-col items-center text-center'>
      <h2 className='font-serif text-[min(9vw,45px)] text-[#3e4b5f] leading-[1.1]'>Pick a color</h2>
      <p className='mt-2.5 mb-5 text-[clamp(12px,5vw,19px)] font-light text-[#697a94]'>
        Color coding your space helps you to spot it a lot easier when you need it.
      </p>
      <div className='mb-5'>
        <input className='hidden' type='color' name='space-color' value={color} readOnly={true} />
        <ColorChooser size={250} onChooseColor={onChooseColor} />
      </div>
      <button
        className='
                    h-10 px-5 rounded-[40px]
                    bg-[#626C7A]
                    text-[13px] text-white font-semibold tracking-widest uppercase 
                    disabled:bg-[#D6D6D6]
                    hover:bg-[#FF5924]
                    enabled:cursor-pointer
                '
        type='submit'
        disabled={isButtonDisabled}
      >
        Finish & save
      </button>
    </div>
  )
}
