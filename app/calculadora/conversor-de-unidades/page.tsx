import Image from 'next/image'
import Link from 'next/link'
import Green from '../../../public/Verde.png'
import Formula from '../../components/Formula'
// { params }: { params: { id: number } }
export default function Page() {
    return <>
      <div className='bg-zinc-950 h-full w-screen '>
      <div className='mx-6 my-8 text-zinc-100'>
        <a href={"/"} className='p-2 m-2 border border-zinc-500/40 rounded bg-zinc-900'>Voltar</a>
      <h1 className='text-center text-3xl text-blue-500'>Conversores de unidades</h1>
      <div className='flex align-center justify-center flex-wrap mx-6'>
      <div className='flex align-center justify-center flex-wrap mx-6'>
      <Formula name={'Conversores de unidades'} type={0} />
      </div>
      </div>
      </div>
      {/* <div className='flex items-center w-screen h-screen bg-zinc-900 '>
      <Image src={Green} alt={''} className='hover:opacity-20'/>
      </div> */}
      </div>
    </>
  }