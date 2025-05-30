import React from 'react'


export function Home() {
  return (
    <div className='w-full h-max overflow-x-hidden pt-4 px-4 font-sans'>
  <div className='flex justify-between items-center max-w-screen-xl mx-auto'>
    <div className='flex gap-4 items-center'>
      <img className='w-11 h-11' src="assets/img.png" alt="" />
      <p className='font-Poppins text-lg'>João Gustavo</p>
    </div>

    <nav className='flex gap-4'>
      <p>Home</p>
      <p>Sobre Mim</p>
      <p>Projetos</p>
      <p>Contato</p>
    </nav>
  </div>
</div>

  )
}

