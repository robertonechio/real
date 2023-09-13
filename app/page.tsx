import Image from 'next/image'
import Link from 'next/link'
import Green from '../public/Verde.png'
import Formula from './components/Formula'
export default function Home() {
  return (
    <body className='bg-zinc-950'>
      <header className='flex w-screen px-4 py-4 align-center'>
        <Image src={Green} alt={''} className='w-8'/>
        <p className=''>Soon</p>
      </header>
      <div className='flex align-center justify-center flex-wrap mx-6'>
      <Formula name={'Área e perimetro de triângulos'} type={0} />
      <Formula name={'Área e perímetro de quadriláteros'} type={1} />
      <Formula name={'Área e perimetro de triângulos'} type={1} />
      <Formula name={'Área e perímetro de quadriláteros'} type={0} />
      <Formula name={'Área e perimetro de triângulos'} type={1} />
      <Formula name={'Área e perímetro de quadriláteros'} type={0} />
      <Formula name={'Área e perimetro de triângulos'} type={1} />
      <Formula name={'Área e perímetro de quadriláteros'} type={0} />
      <Formula name={'Área e perimetro de triângulos'} type={0} />
      <Formula name={'Área e perímetro de quadriláteros'} type={0} />
      <Formula name={'Área e perimetro de triângulos'} type={0} />
      <Formula name={'Área e perímetro de quadriláteros'} type={0} />
      <Formula name={'Área e perimetro de triângulos'} type={0} />
      <Formula name={'Área e perímetro de quadriláteros'} type={0} />
      </div>
      {/* <div className='flex items-center w-screen h-screen bg-zinc-900 '>
      <Image src={Green} alt={''} className='hover:opacity-20'/>
      </div> */}
    </body>
  )
}
