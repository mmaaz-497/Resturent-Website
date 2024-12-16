import React from 'react';
import Image from 'next/image';

const Deserts = () => {
  return (
    <div>
         <div className='w-[1920px] h-[1450px] bg-[#E0E0E0] text-black'>
            <div className='w-[1320px] h-[628px] absolute top-[2615px] left-[300px] flex gap-10'>
                <div><Image src={'/images/desertPic.png'} alt='photo' width={448} height={626} ></Image></div>
                <div>
                    <h2 className='w-[177px] h-[56px] font-bold text-[48px] size-[48px] leading-[56px]'>Dessert</h2>
                    <div className='w-[760px] h-[111px] flex gap-[400px] '>
                        <div className='mt-4'>
                            <h5 className='w-[223px] h-[32px] font-bold text-[24px] size-6 leading-8'>Fig and lemon cake</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-4'>Toasted French bread topped with romano, cheddar</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-8'>560 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>32$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[480px] mt-10 '>
                        <div className='mt-'>
                            <h5 className='w-[297px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>Creamy mascarpone cake</h5>
                            <p className='w-[287px] h-[24px] font-normal size-4 leading-6 mt-2'>Gorgonzola ricotta mozzarella taleggio</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-4'>700 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>43$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10'>
                        <div className=''>
                            <h5 className='w-[361px] h-[32px] font-bold text-[24px] size-6 leading-8'>Pastry blueberries lemon juice</h5>
                            <p className='w-[315px] h-[24px] font-normal size-4 leading-6 mt-2'>Ground cumin avocados peeled and cubed</p>
                            <p className='w-[72px] h-[24px] font-normal size-4 leading-6 mt-4'>1000 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>14$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10'>
                        <div className='mt-'>
                            <h5 className='w-[191px] h-[32px] font-bold text-[24px] size-6 leading-8'>Pain au chocolat</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-4'>Spreadable cream cheese crumbled blue cheese</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-8'>560 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>35$</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Deserts
