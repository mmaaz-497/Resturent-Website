import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <div>
        <div id='blogPic' className='relative left-[300px] top-[800px]'>
        <Image src={'/images/blogPic.png'} alt='photo' width={1320} height={732} ></Image>
        </div>
      
    </div>
  );
}

export default Blog
