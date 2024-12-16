import React from 'react';
import Image from 'next/image';

const Drinks = () => {
  return (
    <div>
        <div className='w-[1920px] h-[1100px] bg-[#E0E0E0] text-black'>
         <div className='w-[1320px] h-[628px] absolute top-[3363px] left-[300px] flex gap-[100px]'>
            <div>
                <div>
                    <Image src={'/images/Coffee.png'} alt='photo' width={24} height={24} ></Image> 
                </div>
                <div className='text-black'>
                    <h2 className='w-[150px] h-[56px] font-bold text-[48px] size-[48px] leading-[56px]'>Drinks</h2>
                    <div className='w-[760px] h-[111px] flex gap-[400px] '>
                        <div className='mt-4'>
                            <h5 className='w-[186px] h-[32px] font-bold text-[24px] size-6 leading-8'>Caffe macchiato</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-4'>Toasted French bread topped with romano cheddar</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-8'>560 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>32$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[450px] mt-10 '>
                        <div className='mt-'>
                            <h5 className='w-[293px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>Aperol Spritz Capacianno</h5>
                            <p className='w-[304px] h-[32px] font-normal size-4 leading-6 mt-2'>Gorgonzola ricotta mozzarella taleggio</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-4'>700 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>43$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10'>
                        <div className=''>
                            <h5 className='w-[229px] h-[32px] font-bold text-[24px] size-6 leading-8'>Caffe Latte Campuri</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-2'>Ground cumin avocados peeled and cubed</p>
                            <p className='w-[72px] h-[24px] font-normal size-4 leading-6 mt-4'>1000 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>14$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10'>
                        <div className='mt-'>
                            <h5 className='w-[352px] h-[32px] font-bold text-[24px] size-6 leading-8'>Caffe Latte Campuri</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-4'>Spreadable cream cheese crumbled blue cheese</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-8'>560 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>35$</h5>
                        </div>
                    </div>
                </div>


            </div>
            <div className='w-[448px] h-[626px] mt-4 '><Image src={'/images/mHeroDrinkPic.png'} alt='photo' width={448} height={626} ></Image></div>
            </div>
            <div className='w-[1920] h-[468] bg-[#0D0D0DD9] absolute top-[2027px] left-[-1px] px-[300px] py-[150px]'>
            <Image src={'/images/menuHeroLastPic.png'} alt='photo' width={1314} height={255} ></Image>
            </div>
            </div>
                <div className='w-[1322px] h-[275px] text-black absolute top-[4111px] left-[295px]'>
                    <p className='w-[152.98] relative left-[600px] h-[25.93] font-normal size-[18px] leading-[26px]'>Partners & Clients</p>
                    <h2 className='w-[672.9] h-[55.86] font-bold relative left-[350px] text-[48px] size-[48px] leading-[56px]'>We work with the best pepole</h2>
                    <div className='w-[1322px] h-[129.37] flex gap-[80px]'>
                    <Image src={'/images/menuLastDivPic1.png'} alt='photo' width={240.96} height={129.23} ></Image>
                    <Image src={'/images/menuLastDivPic2.png'} alt='photo' width={166} height={129} ></Image>
                    <Image src={'/images/menuLastDivPic3.png'} alt='photo' width={144} height={127} ></Image>
                    <Image src={'/images/menuLastDivPic4.png'} alt='photo' width={131} height={130} ></Image>
                    <Image src={'/images/menuLastDivPic5.png'} alt='photo' width={170} height={130} ></Image>
                    <Image src={'/images/menuLastDivPic6.png'} alt='photo' width={114} height={129} ></Image>
                    </div>

                </div>
    </div>
  )
}

export default Drinks
