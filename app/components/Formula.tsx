import Image from 'next/image'
import Link from 'next/link'

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'

type Formula = {
  name: string,
  type: number,
  onClick?: any
}

export default function Formula({
  name,
  type,
  onClick
}: Formula) {
  return (
    <>
      {type === 0 && (
        <div className='py-4 px-4 text-zinc-100 bg-zinc-900 rounded mx-4 my-4 w-96 border border-zinc-500/40 hover:border-blue-700/40 hover:bg-blue-900/10'>
          <p className='text-xs text-blue-500'>Geometria</p>
          <p>{name}</p>
        </div>
      )}
      {type === 1 && (
        <div className='py-4 px-4 text-zinc-100 bg-zinc-900 rounded mx-4 my-4 w-96 border border-zinc-500/40 hover:border-red-700/40 hover:bg-red-900/10'>
        <p className='text-xs text-red-500'>Algebra</p>
        <p>{name}</p>
      </div>
      )}
    </>
  )
}
