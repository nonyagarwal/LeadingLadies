import React from 'react'
import { useRouter } from 'next/router'

const Buttons = () => {
    const router = useRouter();
  const handleClick = () => {
    router.push('/forms');
  };
  return (
    <div>
      <div>
         <button className='px-8 py-2 border-black font-semibold hover:scale-110' onClick={handleClick}>Apply Now</button>
        </div> 
    </div>
  )
}

export default Buttons
