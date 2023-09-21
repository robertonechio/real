import Image from 'next/image'
import Link from 'next/link'
import Green from '../../public/Verde.png'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'


export default function Nav() {
  return (
    <>
    <header className='flex w-screen px-3 py-0.5 align-center bg-zinc-900 border border-zinc-500/40'>
        <Image src={Green} alt={''} className='w-16'/>
    </header>
    </>
  )
}
