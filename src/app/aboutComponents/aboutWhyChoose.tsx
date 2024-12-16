import React from 'react';
import Image from 'next/image';

const AboutWhyChoose = () => {
  return (
    <div>
        <div className='w-[1320px] h-[865px] absolute top-[1384px]  left-[300px] text-black'>
            <div className='w-[579px] h-[112px] relative  left-[550px] text-center'>
                <h2 className='w-[361px] h-[56px] font-bold size-[48px] text-[48px] leading-[56px]'>Why Choose us</h2>
                <p className='w-[579px] h-[48px] font-normal size-4 leading-6 '>Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum </p>
            </div>
            <div className='w-[1320px] h-[386px] mt-16'>
            <Image className='mb-4' src={'/images/pagesWhyChoosePic.png'} alt='photo' width={1320} height={386} ></Image>
            </div>
            <div className='w-[1320px] h-[253px] mt-10 flex gap-16'>
                <div className='w-[359px] h-[225px]'>
                    <Image className='mb-4 ml-[120px]' src={'/images/pagesWhyChooseStudentPic.png'} alt='photo' width={80} height={80} ></Image>
                    <h5 className='w-[115px] h-[29px] font-bold size-6 text-[24px] leading-8 ml-[100px]'>Best Chef</h5>
                    <p className='w-[359px] h-[76px] font-normal size-4 leading-6 mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat </p>
                </div>
                <div className='w-[359px] h-[225px]'>
                    <Image className='mb-4 ml-[150px]' src={'/images/pagesWhyChooseCoffeePic.png'} alt='photo' width={80} height={80} ></Image>
                    <h5 className='w-[155px] h-[32px] font-bold size-6 text-[24px] leading-8 ml-[100px]'>120 Item food</h5>
                    <p className='w-[359px] h-[76px] font-normal size-4 leading-6 mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat </p>
                </div>
                <div className='w-[359px] h-[225px]'>
                    <Image className='mb-4 ml-[150px]' src={'/images/pagesWhyChoosePersonPic.png'} alt='photo' width={80} height={80} ></Image>
                    <h5 className='w-[219px] h-[32px] font-bold size-6 text-[24px] leading-8 ml-[100px]'>Clean Environment</h5>
                    <p className='w-[359px] h-[76px] font-normal size-4 leading-6 mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat </p>
                </div>

            </div>

        </div>

        <div className='absolute top-[2369px]'><Image className='' src={'/images/pagesWhyChooseTeamMemberPic.png'} alt='photo' width={1920} height={686} ></Image></div>

      
    </div>
  );
}

export default AboutWhyChoose
