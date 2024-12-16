import React from 'react';
import Image from 'next/image';

const OurChef = () => {
  return (
    <div>
        <div className='relative top-[400px] left-[144px]'>
        <Image src={'/images/ourChef.png'} alt='photo' width={1764} height={657} ></Image> 

        </div>
      
    </div>
  );
}

export default OurChef
