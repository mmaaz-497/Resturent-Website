import React from 'react'
import Image from 'next/image';

const ExtraFooter = () => {
  return (
    <div>
        <div className='w-[1923px] h-[469] relative top-[-500px] left-[-1px]'>
            <Image src={'/images/extraFooter.png'} alt='photo' width={1923} height={467} ></Image>
        </div>

        
        <div className='absolute top-[3786px] left-[300px]'>
        <Image src={'/images/ourMenu.png'} alt='photo' width={1320} height={656} ></Image>
        </div>
      
    </div>
  );
}

export default ExtraFooter
