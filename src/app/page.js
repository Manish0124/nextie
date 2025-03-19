'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {

  const router = useRouter();
  console.log(router)

  function  handelNavigation(){
    router.push('/products')
  }

  return (
    <main className='flex flex-col items-center justify-center p-2 min-h-screen ' >
      <h1>welcome to nextjs here</h1>
      <button onClick={handelNavigation} >navigate using userouter hook to product pages</button>
    </main>
  )
}
