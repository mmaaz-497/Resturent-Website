import React from 'react';
import Image from 'next/image';

const ClientSaying = () => {
  return (
    <div>
            <div id='clientSaying' className='relative top-[500px] left-[400px]'>
            <Image src={'/images/clientSaying.png'} alt='photo' width={1273} height={770} ></Image> 
            </div>

            <div id='client2' className='relative top-[650px] left-[250px]'>
            <Image src={'/images/client2.png'} alt='photo' width={1918} height={558} ></Image> 
            </div>
    </div>
  );
}
export default ClientSaying
;