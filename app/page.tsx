import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-black text-white p-4'>
      <div className='max-w-2xl text-center space-y-8'>
        <h1 className='text-5xl font-mono font-bold tracking-tighter sm:text-7xl'>
          Mymind <span className='text-zinc-500 text-3xl'>clone</span>
        </h1>
        <p className='text-zinc-400 font-mono text-lg'>
          Tu jardín privado para ideas, imágenes y colores. Sin carpetas. Sin caos.
        </p>

        <Link
          href='auth/login'
          className='px-8 py-4 bg-white text-black font-mono font-bold rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105'
        >
          Empezar ahora
        </Link>
      </div>
    </main>
  );
}
