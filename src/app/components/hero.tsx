import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
          <div>
            <div className='w-[1320px] h-[489px] relative top-[900px] left-[300px]'>
            <h1 className='w-[177px] h-[40px] font-normal size-8 leading-10 text-[#FF9F0D] ml-[500px] mb-5'> Food Category</h1>
            <h1 className='w-[446px] h-[56px] font-bold size-[48px] leading-[56px] text-[48px] ml-[350px] mb-5'> Choose Food Iteam</h1>
              <div className='flex w-[1320px] h-[329px] gap-5'>
                <div>
                <Image src={'/images/foodItem1.png'} alt='photo' width={305} height={328} ></Image>
                </div>
                <div>
                <Image src={'/images/foodItem2.png'} alt='photo' width={306} height={329} ></Image> 
                </div>
                <div>
                <Image src={'/images/foodItem3.png'} alt='photo' width={306} height={329} ></Image> 
                </div>
                <div>
                <Image src={'/images/foodItem4.png'} alt='photo' width={306} height={329} ></Image> 
                </div>
              </div>
          </div>
          <div className='w-[1320px] h-[716px] relative top-[950] left-[300px] flex gap-5'>
            <div>
            <Image src={'/images/extra1.png'} alt='photo' width={362} height={356} ></Image> 
            </div>
            <div className='mt-[100px]'>
            <Image src={'/images/extra2.png'} alt='photo' width={281} height={231} ></Image> 
            </div>

          </div>
          <div className='w-[1320px] h-[716px] relative top-[650] left-[300px] flex gap-5'>
            <div>
            <Image src={'/images/extra3.png'} alt='photo' width={244} height={306} ></Image> 
            </div>
            <div className='mt-[px]'>
            <Image src={'/images/extra4.png'} alt='photo' width={221} height={226} ></Image> 
            </div>
            <div className='mt-[px]'>
            <Image src={'/images/extra5.png'} alt='photo' width={161} height={168} ></Image> 
            </div>

          </div>
          <div className='ml-[797px] mt-[120px]'>
            <Image src={'/images/extra6.png'} alt='photo' width={161} height={166} ></Image> 
            </div>
            <div className='flex'></div>
            <div className='relative top-[-700px] left-[1094px]'>
             <h1 className='w-[175px] h-[40px] font-normal size-8 leading-10 text-[#FF9F0D]'>Why Choose Us</h1>
             <h1 className='w-[433px] h-[112px] font-bold size-[48px] leading-[56px] text-[48px] mt-5'>Exta ordinary taste
             And Experienced </h1>
             <p className='w-[526px] h-[120px] font-normal size-4 leading-6 mt-10'>Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum Urna elit augue urna vitae feugiat pretium donec id elementum Ultrices mattis sed vitae mus risus Lacus nisi et ac dapibus sit eu velit in consequat</p>
             <div className='w-[374px] h-[135px] flex gap-10'>
              <div className='w-[102px] h-[100px] bg-[#FF9F0D] flex pl-[20px]'><Image src={'/images/extra7.png'} alt='photo' width={56} height={56} ></Image></div>
              <div className='w-[102px] h-[100px] bg-[#FF9F0D] flex pl-[20px]'><Image src={'/images/extra8.png'} alt='photo' width={56} height={56} ></Image></div>
              <div className='w-[102px] h-[100px] bg-[#FF9F0D] flex pl-[20px]'><Image src={'/images/extra9.png'} alt='photo' width={56} height={56} ></Image></div>
             </div>
             <div className='w-[374px] h-[93px] mt-10'><Image src={'/images/extra10.png'} alt='photo' width={374} height={93} ></Image></div>
            </div>
          </div>
          
        
  );
}

export default Hero
