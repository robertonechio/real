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
      <Formula name={'Área e perimetro de triângulos e muitas outras coisas.'} type={0} />
      <Formula name={'Área e perímetro de quadriláteros'} type={1} />
      <Formula name={'Área e perimetro de triângulos'} type={2} />
      <Formula name={'Área e perímetro de quadriláteros'} type={3} />
      </div>
      {/* <div className='flex items-center w-screen h-screen bg-zinc-900 '>
      <Image src={Green} alt={''} className='hover:opacity-20'/>
      </div> */}
      </div>
    </>
  )
}
