import Image from 'next/image'
import Link from 'next/link'

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'

type Formula = {
  name: string,
  type: number,
  link?: string
}

export default function Formula({
  name,
  type,
  link = "#"
}: Formula) {
  return (
    <>
    <a href={link}>
      {type === 0 && (
        <div className='py-4 px-4 text-zinc-100 bg-zinc-900 rounded mx-4 my-4 w-96 border border-zinc-500/40 hover:border-blue-700/40 hover:bg-blue-900/10'>
          <p className='text-xs text-blue-500'>Conversores de unidades</p>
          <p>{name}</p>
        </div>
      )}
      {type === 1 && (
        <div className='py-4 px-4 text-zinc-100 bg-zinc-900 rounded mx-4 my-4 w-96 border border-zinc-500/40 hover:border-red-700/40 hover:bg-red-900/10'>
        <p className='text-xs text-red-500'>Álgebra</p>
        <p>{name}</p>
      </div>
      )}
      {type === 2 && (
        <div className='py-4 px-4 text-zinc-100 bg-zinc-900 rounded mx-4 my-4 w-96 border border-zinc-500/40 hover:border-green-700/40 hover:bg-green-900/10'>
        <p className='text-xs text-green-500'>Geometria</p>
        <p>{name}</p>
      </div>
      )}
      {type === 3 && (
        <div className='py-4 px-4 text-zinc-100 bg-zinc-900 rounded mx-4 my-4 w-96 border border-zinc-500/40 hover:border-yellow-700/40 hover:bg-yellow-900/10'>
        <p className='text-xs text-yellow-500'>Financeiro</p>
        <p>{name}</p>
      </div>
      )}
      {type === 100 && (
        <div className='py-4 px-4 text-zinc-100 bg-zinc-900 rounded mx-4 my-4 w-96 border border-zinc-500/40 hover:border-yellow-700/40 hover:bg-yellow-900/10'>
        <p className='text-xl text-yellow-500'>{name}</p>
      </div>
      )}
      {type === 101 && (
        <div className='py-4 px-4 text-zinc-100 bg-zinc-900 rounded mx-4 my-4 w-96 border border-zinc-500/40 hover:border-purple-700/40 hover:bg-purple-900/10'>
        <p className='text-xl text-purple-500'>{name}</p>
      </div>
      )}
      {type === 102 && (
        <div className='py-4 px-4 text-zinc-100 bg-zinc-900 rounded mx-4 my-4 w-96 border border-zinc-500/40 hover:border-blue-700/40 hover:bg-blue-900/10'>
        <p className='text-xl text-blue-500'>{name}</p>
      </div>
      )}
      </a>
    </>
  )
}
