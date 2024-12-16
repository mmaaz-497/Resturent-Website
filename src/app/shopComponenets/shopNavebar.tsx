import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShopNavebar = () => {
  return (
    <div>
      <div className='w-[1920px] h-[90px] '>
   <div className='w-[1320px] h-[32px] relative top-[29px] left-[300px] '>
        <h5 className='w-[109px] h-[32px] text-[24px] font-bold size-6 leading-8 py-4'>FoodTuck</h5>
        <div className='w-[504px] h-[24px] relative top[4px] left-[451px]'>
      <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px] pr-4' href={'/Home'}>Home</Link>
      <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px] pr-4' href={'/Menu'}>Menu</Link>
      <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px] pr-4' href={'/Blog'}>Blog</Link>
      <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px] pr-4' href={'/Pages'}>Pages</Link>
      <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px] pr-4' href={'/About'}>About</Link>
      <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px] pr-4' href={'/Shop'}>Shop</Link>
      <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px]' href={'/Contact'}>Contact</Link>
      </div>
     
      <div className='w-[24px] h-[24px] absolute top-[47px] left-[1296px] flex gap-6 '>
      <Image src={'/images/handBag.png'} alt='photo' width={24} height={24} ></Image>
      <Image src={'/images/User.png'} alt='photo' width={24} height={24} ></Image>
      <Image src={'/images/magnifyingGlass.png'} alt='photo' width={24} height={24} ></Image>
      </div>
      </div>
      </div>
        <div className=' w-[1920] h-[410px] mt-8'>
             <Image src={'/images/navebar2Pic.png'} alt='photo' width={1920} height={410} ></Image>
             <div className='w-[219px] h-[104px] absolute top-[198px] left-[850px]'>
                <h2 className='w-[225px] h-[56px] font-bold text-[48px] size-[48px] leading-[56px]'>Our Shop</h2>
                 <div className='flex gap-4 ml-8'> 
                    <p className='w-[56px] h-[28px] font-semibold  size-[20px] leading-[28px]'>Home</p>
                    <Image src={'/images/caretRight.png'} alt='photo' width={16} height={16} ></Image>
                    <p className='w-[56px] h-[28px] font-semibold  size-[20px] leading-[28px] text-[#FF9F0D]'>Shop</p>
                 </div> 

             </div>
        </div>

      
    </div>
  )
}

export default ShopNavebar
