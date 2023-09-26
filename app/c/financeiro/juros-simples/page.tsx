import Image from 'next/image'
import Link from 'next/link'
import Green from '../../../public/Verde.png'
import Input from '../../../components/Input'
// { params }: { params: { id: number } }
export default function Page() {
    return <div>
      <div className='bg-zinc-950 h-full w-screen '>
      <div className='mx-6 my-8 text-zinc-100'>
        <a href={"/c/financeiro"} className='p-2 m-2 border border-zinc-500/40 rounded bg-zinc-900'>Voltar</a>
      <h1 className='text-center text-3xl text-yellow-500'>Juros simples</h1>
      <p className='mx-20 my-4 text-center'>Formula: <span className='text-yellow-500'>J = C × i × t</span><br></br>
J = juros simples; C = capital inicial; i = taxa de juros; t = tempo da aplicação.</p>
      <p className='mx-20 my-4 text-center'>O juro simples é uma taxa previamente definida e que incide somente sobre o valor inicial.</p>
      <div className='flex align-center justify-center flex-wrap mx-6'>
      <Input label={'Valor Inicial'} id={'valor'}>
      
      </Input>
      <Input label={'Taxa de juros'} id={'taxa'}>

      </Input>
      <Input label={'Período em'} id={'tempo'}>

      </Input>
      </div>
      <div className='flex align-center justify-center flex-wrap mx-6 my-4'>
      <button className='p-2 bg-yellow-500 rounded hover:bg-yellow-600 w-1/3'>Calcular</button>
      <button className='p-2 text-yellow-500 w-full'>Limpar</button>
      </div>
      </div>
      {/* <div className='flex items-center w-screen h-screen bg-zinc-900 '>
      <Image src={Green} alt={''} className='hover:opacity-20'/>
      </div> */}
      </div>
    </div>
  }