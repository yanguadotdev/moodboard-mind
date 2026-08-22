'use client'

import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { ButtonWithCircle } from './ButtonWithCircle'

const SpaceForm = dynamic(() => import('./(SpaceForm)/SpaceForm').then((mod) => mod.SpaceForm), { ssr: false })

export function EmptySpace() {
  const modalRef = useRef<null | HTMLDialogElement>(null)

  function openForm() {
    modalRef.current?.showModal()
  }

  return (
    <>
      <SpaceForm modalRef={modalRef} />
      <div
        className='absolute left-0 top-0 w-dvw bg-cover aspect-2880/762 -z-10'
        style={{ backgroundImage: 'url(/empty-top-light-bg.webp)' }}
      ></div>
      <div className='h-full flex flex-col items-center justify-center'>
        <div>
          <h2 className='italic text-center text-[clamp(24px,10vw,56px)] text-black leading-none font-serif select-none'>
            Maybe what you need <br />
            is some space.
          </h2>
        </div>
        <div className='absolute bottom-10'>
          <ButtonWithCircle text='Create a space' onClick={openForm} />
        </div>
      </div>
      <div
        className='absolute left-0 bottom-0 w-screen h-screen bg-cover translate-y-[60%] -z-10'
        style={{ backgroundImage: 'url(/circle-light.webp)' }}
      ></div>
    </>
  )
}
