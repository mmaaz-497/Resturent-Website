import React from 'react';
import Image from 'next/image';

const AboutClientSaying = () => {
  return (
    <div>
        <div className='w-[1273px] h-[770px] absolute top-[3175px] left-[300px] text-black'>
            <p className='w-[128px] h-[40px] font-normal size-8 leading-10 text-[32px] text-[#FF9F0D]'>Testimonials</p>
            <h2 className='w-[599px] h-[56px] font-bold size-[48px] leading-[56px] text-[48px] mt-4'>What our client are saying</h2>
            <div className='w-[697px] h-[486px] absolute relative-[px] left-[312px] mt-8'>
            <Image className='rounded-[100px] ml-[300px]' src={'/images/myPic.jpg'} alt='photo' width={133} height={134} ></Image>
            <p className='w-[697px] h-[104px] font-normal size-[18px] leading-[26px] text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit Porro vel ratione quos quaerat nisi dolor et Dolorum voluptatem rerum Tenetur</p>
            <Image className=' ml-[300px]' src={'/images/clientSayingStars.png'} alt='photo' width={152} height={24} ></Image>
            <h5 className='w-[159px] h-[32px] font-bold size-6 leading-8 text-[24px] ml-[310px] mt-4'>M Maaz</h5>
            <p className='w-[110px] h-[24px] font-normal size-4 leading-6 ml-[300px] mt-4'>Food Specialist</p>
            <Image className=' ml-[310px] mt-[100px]' src={'/images/clientSayingDots.png'} alt='photo' width={86} height={16} ></Image>
            </div>
        </div>
      
    </div>
  );
}

export default AboutClientSaying
