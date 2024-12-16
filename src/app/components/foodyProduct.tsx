import React from 'react';
import Image from 'next/image';

const FoodyProduct = () => {
  return (
    <div>
          <div className='w-[1320px] h-[562px] absolute top-[1070px] left-[300px]  '>
          <div className='absolute top-[px] left-[660px]'>
            <Image src={'/images/Egg2.png'} alt='photo' width={660} height={330} ></Image> 
            </div>
            <div className='absolute top-[350px] left-[660px]'>
            <Image src={'/images/Roll.png'} alt='photo' width={322} height={194} ></Image> 
            </div>
            <div className='absolute top-[350px] left-[1000px]'>
            <Image src={'/images/sendWich.png'} alt='photo' width={322} height={194} ></Image> 
            </div>
            <div className='w-[562px] h-[562px]'>
              <h1 className=' w-[91px] h-[40px] font-normal size-8 leading-10'>About us</h1>
              <h1 className=' w-[446px] h-[110px] font-bold size-[48px] leading-[56px] text-[48px] mb-[20px]'>We Create the best foody product</h1>
              <p className=' w-[526px] h-[130px] font-normal size-4 leading-6 mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum Urna elit augue urna vitae feugiat pretium donec id elementum Ultrices mattis sed vitae mus risus Lacus nisi et ac dapibus sit eu velit in consequat</p>
              <p className=' w-[425px] h-[26px] font-normal size-[18px] leading-[26px] mt-[10px]'> Lacus nisi et ac dapibus sit eu velit in consequat</p>
              <p className=' w-[535px] h-[26px] font-normal size-[18px] leading-[26px] mt-[10px]'> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
              <p className=' w-[465px] h-[26px] font-normal size-[18px] leading-[26px] mt-[10px]'> Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              <div className='w-[190px] h-[60px] bg-[#FF9F0D] rounded-3xl py-[15px] px-[50px] mt-10 '>Read More</div>
            </div>
            </div>
    </div>
  )
}

export default FoodyProduct
