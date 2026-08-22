'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Links = Array<{ name: string; href: string }>

const links: Links = [
  {
    name: 'Everything',
    href: '/everything'
  },
  {
    name: 'Spaces',
    href: '/spaces'
  }
]

const activeLinkClass: string = `
    relative text-[#353D48] before:content-[''] before:h-12
    before:w-[calc(100%+30px)] before:bg-[#ff5924] before:absolute before:-top-13
    before:-left-3.75 before:rounded-[30px]
`

export function Navbar() {
  const pathname = usePathname()

  const linksElements = links.map((link) => (
    <li key={link.href} className={clsx(link.href === pathname && activeLinkClass)}>
      <Link href={link.href}>{link.name}</Link>
    </li>
  ))

  return (
    <nav className='h-10'>
      <ul className='flex justify-end gap-8 text-[20px] text-[#748297] pt-2'>{linksElements}</ul>
    </nav>
  )
}
