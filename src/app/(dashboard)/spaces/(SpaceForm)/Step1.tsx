'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Step1({ onNext }: { onNext: () => void }) {
  const [name, setName] = useState('')

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement
    setName(input.value)
  }

  const isButtonDisabled = name.length === 0

  return (
    <div className='px-7.5 py-10 flex flex-col items-center text-center'>
      <Image src={'/logo.svg'} alt='Mind Logo' width={57} height={57} />
      <h2 className='font-serif text-[min(9vw,45px)] text-[#3e4b5f] leading-[1.1]'>Create new space</h2>
      <p className='mt-2.5 mb-5 text-[clamp(12px,5vw,19px)] font-light text-[#697a94]'>
        A space is a collection of cards inside your mind. Upload directly into a space, or pick a card from the
        overview.
      </p>
      <input
        className='
                    w-full p-3.75 mb-5 
                    text-center text-[19px] text-[#748297]
                    border-2 border-[#d2ddec] outline-[#d2ddec] rounded-[3px] outline-0
                    placeholder:text-[#748297]
                    hover:outline-2
                '
        placeholder='Name your new space'
        type='text'
        name='space-name'
        onChange={handleName}
        value={name}
      />
      <button
        className='
                    h-10 px-5 rounded-[40px]
                    bg-[#626C7A]
                    text-[13px] text-white font-semibold tracking-widest uppercase 
                    disabled:bg-[#D6D6D6]
                    hover:bg-[#FF5924]
                    enabled:cursor-pointer
                '
        type='button'
        onClick={onNext}
        disabled={isButtonDisabled}
      >
        Next step
      </button>
    </div>
  )
}
