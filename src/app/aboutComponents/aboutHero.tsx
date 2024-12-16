import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div>
       <div className='w-[1920px] h-[4500px] bg-[#E0E0E0] text-black flex gap-[900px]'>
            <div className='w-[1320px] h-[734px] absolute top-[630px] left-[300px] flex gap-20'>
                    <div className='w-[669px] h-[734px] flex gap-4'>
                        <div className='w-[336px] h-[536px]'><Image src={'/images/pagesPic1.png'} alt='photo' width={336} height={536} ></Image></div>
                        <div>
                            <Image className='mb-4' src={'/images/pagesPic2.png'} alt='photo' width={309} height={271} ></Image>
                            <Image src={'/images/pagesPic3.png'} alt='photo' width={309} height={382} ></Image>
                        </div>
                    </div>
                    <div className='w-[526px] h-[366px] mt-[150px] '>
                        <p className='w-[68px] h-[26px] font-normal size-[18px] leading-[26px] text-[#FF9F0D]'>About us</p>
                        <h2 className='w-[524px] h-[112px] font-bold size-[48px] leading-[56px] text-[48px] mt-8'>Food is an important 
                        part Of a balanced Diet</h2>
                        <p className='w-[526px] h-[96px] font-normal size-4 leading-6 mt-8'>Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum Urna elit augue urna vitae feugiat pretium donec id elementum Ultrices mattis vitae mus risus Lacus nisi et ac dapibus sit eu velit in consequat</p>
                        <div className='w-[379px] h-[60px] mt-8'><Image src={'/images/pagesButton.png'} alt='photo' width={379} height={60} ></Image></div>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default AboutHero
;