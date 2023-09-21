import Image from 'next/image'
import Link from 'next/link'
import Green from '../../../public/Verde.png'
import Formula from '../../components/Formula'
export default function Page({ params }: { params: { id: string } }) {
    return <>
      <div className='bg-zinc-950 h-full w-screen '>
      <div className='mx-8 text-zinc-100'>
        <a href={"/"} className='p-2 m-2 border border-zinc-500/40 rounded bg-zinc-900'>Voltar</a>
      <h1 className='text-center text-3xl'>Assunto Aleatorio</h1>
      <p className='mx-20 my-4'>Olá!</p>
      </div>
      {/* <div className='flex items-center w-screen h-screen bg-zinc-900 '>
      <Image src={Green} alt={''} className='hover:opacity-20'/>
      </div> */}
      </div>
    </>
  }