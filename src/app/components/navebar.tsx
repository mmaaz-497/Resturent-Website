import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Navebar = () => {
  return (
    <div>
    <div className='w-[1920px] h-[850px] bg-[]'>
  
        <Image src={'/images/1Pic.png'} alt='photo' width={1920} height={950} ></Image>
        
        <div className='w-[1320px] h-[87px] absolute left-[300px] top-[45px]  text-white'>
         <div className='w-[109px] h-[32px] relative left-[605px]'>Foodtuck</div>
            <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px]' href={'/Home'}>Home</Link>
            <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px]' href={'/Menu'}>Menu</Link>
            <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px]' href={'/Blog'}>Blog</Link>
            <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px]' href={'/Pages'}>Pages</Link>
            <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px]' href={'/About'}>About</Link>
            <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px]' href={'/Shop'}>Shop</Link>
            <Link className='w-[45px] h-[24px] mt-[48px] font-normal size-4 leading-[24px] mr-[10px]' href={'/Contact'}>Contact</Link>
            <div className='w-[310px] h-[54px] absolute top-[33px] left-[978px] border rounded-3xl text-white pl-[10px] py-[10px]'>
                Search...
            </div>
            <div className='w-[24px] h-[24px] absolute top-[47px] left-[1296px]'>
            <Image src={'/images/handBag.png'} alt='photo' width={24} height={24} ></Image>
            </div>
        </div>
      </div>
             </div>

  );
}

export default Navebar
