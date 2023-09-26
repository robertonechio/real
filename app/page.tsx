"use client"
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Green from '../public/Verde.png'
import Formula from './components/Formula'
import { useState } from 'react'
export default function Home() {
  return (
    <>
      <div className='bg-zinc-950 w-screen'>
      <div className='flex align-center justify-center flex-wrap mx-6'>
      {/* <Formula name={'Área e perimetro de triângulos'} type={0} link=''/> */}
      <Formula name={'Financeiro'} type={100} link={'/c/financeiro'}/>
      <Formula name={'Programação'} type={101} />
      <Formula name={'Matemática'} type={102} />
      {/* <Formula name={'Porcentagem'} type={1} />
      <Formula name={'Média'} type={1} />
      <Formula name={'Proporção'} type={1} />
      <Formula name={'Razão'} type={1} />
      <Formula name={'Poliedros'} type={2} />
      <Formula name={'Juros compostos'} type={3} />
      <Formula name={'Juros simples'} type={3} /> */}
      </div>
      {/* <div className='flex items-center w-screen h-screen bg-zinc-900 '>
      <Image src={Green} alt={''} className='hover:opacity-20'/>
      </div> */}
      </div>
    </>
  )
}
