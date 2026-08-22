'use client'

import { useState } from 'react'
import { Step1 } from './Step1'
import { Step2 } from './Step2'

export function SpaceForm({ modalRef }: { modalRef: React.RefObject<HTMLDialogElement | null> }) {
  const [step, setStep] = useState(1)

  function closeForm(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      modalRef.current?.close()
    }
  }

  function handleNext() {
    setStep((s) => s + 1)
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(new FormData(event.target))
  }

  return (
    <dialog
      ref={modalRef}
      className='backdrop:bg-[#000000cc] bg-transparent p-0 border-0 max-w-none max-h-none outline-none absolute z-50'
    >
      <div
        className='
                    w-screen h-screen
                    flex items-center justify-center
                    shadow-[-5px_-5px_22px_rgb(0_0_0/6%),24px_24px_44px_rgb(0_0_0/22%)]
                '
        onClick={closeForm}
      >
        <div className='w-110 h-auto bg-white rounded-md'>
          <form onSubmit={handleSubmit} autoComplete='off'>
            <div hidden={step !== 1}>
              <Step1 onNext={handleNext} />
            </div>
            <div hidden={step !== 2}>
              <Step2 />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  )
}
