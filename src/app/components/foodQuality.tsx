import React from 'react'
import Image from 'next/image';

const FoodQuality = () => {
  return (
    <div>
        <div>
             {/* FOOD QUALITY */}

        <div className='w-[472px] h-[356px] absolute top-[220px] left-[300px]'>
          <h1 className='w-[249px] h-[40px] text-[#FF9F0D] font-normal size-8 leading-10'>Its Quick & Amusing!</h1>
          <h1 className='w-[472px] h-[36px] font-bold size-[60px] leading-[68px] text-[60px]'>The Art of speed
          food Quality</h1>
          <h1 className='w-[418px] h-[48px] font-normal size-4 leading-[24px] mt-[150px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius sed pharetra dictum neque massa congue</h1>
          <button className='w-[190px] h-[60px] bg-[#FF9F0D] rounded-3xl mt-[50px]'>See Menu </button>
        </div>
        <div className='absolute top-[198px] left-[865px]'>
           <Image src={'/images/egg.png'} alt='photo' width={877.8} height={670} ></Image> 
        </div>



        
      </div>
     
    </div>
  )
}

export default FoodQuality
