import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Face = () => {
  const [ani1, setani] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setani(true);
    }, 500);
  },[])
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <div className={`absolute transform transition-all duration-1000 ease-in-out 
        ${ani1 ? 'top-5 left-1/2 -translate-x-1/2' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}`}
        >
        <Image src= "/images/images.png"
        alt='Icon'
        width={60}
        height={60}
        className={`inline transition-all duration-1000 ease-in-out ${ani1 ? 'w-12 h-24' : 'w-24 h-48'}`}
        />
        <Image src={"/images/file.png"}
        alt = 'Icon2'
        width={170}
        height={170}
        className={`inline transition-all duration-1000 ease-in-out ${ani1 ? 'w-15 h-24' : 'w-40 h-44'}`}
        />
      </div>
    </section>
  )
}

export default Face