import { Navbar } from './Navbar'
import { SideBar } from './Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen overflow-y-auto flex flex-col'>
      <header className='w-screen px-20'>
        <Navbar />
      </header>
      <aside className='w-20 h-screen absolute top-0 left-0'>
        <SideBar />
      </aside>
      <main className='px-20 flex-1'>{children}</main>
    </div>
  )
}
