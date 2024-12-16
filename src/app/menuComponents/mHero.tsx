import React from 'react';
import Image from 'next/image';

const MHero = () => {
  return (
    <div>
        <div className='w-[1920px] h-[1450px] bg-[#E0E0E0] text-black'>
            <div className='w-[1320px] h-[628px] absolute top-[600px] left-[300px] flex gap-10'>
                <div><Image src={'/images/starterMenu.png'} alt='photo' width={448} height={626} ></Image></div>
                <div>
                    <h2 className='w-[294px] h-[56px] font-bold text-[48px] size-[48px] leading-[56px]'>Starter Menu</h2>
                    <div className='w-[760px] h-[111px] flex gap-[400px] '>
                        <div className='mt-4'>
                            <h5 className='w-[341px] h-[32px] font-bold text-[24px] size-6 leading-8'>Alder Grilled Chinook Salmon</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-4'>Toasted French bread topped with romano cheddar</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-8'>560 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>32$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10 '>
                        <div className='mt-'>
                            <h5 className='w-[341px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>Berries and creme tart</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-2'>Gorgonzola ricotta mozzarella taleggio</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-4'>700 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>43$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10'>
                        <div className=''>
                            <h5 className='w-[379px] h-[32px] font-bold text-[24px] size-6 leading-8'>Tormentoso Bush Pizza Pintoage</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-2'>Ground cumin avocados peeled and cubed</p>
                            <p className='w-[72px] h-[24px] font-normal size-4 leading-6 mt-4'>1000 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>14$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10'>
                        <div className='mt-'>
                            <h5 className='w-[341px] h-[32px] font-bold text-[24px] size-6 leading-8'>Spicy Vegan Potato Curry</h5>
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


        {/* Main Coursee   */}

        <div className='w-[1320px] h-[628px] absolute top-[1279px] left-[300px] flex gap-[100px]'>
            <div>
                <div>
                    <Image src={'/images/Coffee.png'} alt='photo' width={24} height={24} ></Image> 
                </div>
                <div className='text-black'>
                    <h2 className='w-[289px] h-[56px] font-bold text-[48px] size-[48px] leading-[56px]'>Main Course</h2>
                    <div className='w-[760px] h-[111px] flex gap-[400px] '>
                        <div className='mt-4'>
                            <h5 className='w-[382px] h-[32px] font-bold text-[24px] size-6 leading-8'>Optic Big Breakfast Combo Menu</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-4'>Toasted French bread topped with romano cheddar</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-8'>560 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>32$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10 '>
                        <div className='mt-'>
                            <h5 className='w-[342px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>Cashew Chicken With Stir-Fry</h5>
                            <p className='w-[304px] h-[32px] font-normal size-4 leading-6 mt-2'>Gorgonzola ricotta mozzarella taleggio</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-4'>700 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>43$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10'>
                        <div className=''>
                            <h5 className='w-[379px] h-[32px] font-bold text-[24px] size-6 leading-8'> Vegetables & Green Salad</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-2'>Ground cumin avocados peeled and cubed</p>
                            <p className='w-[72px] h-[24px] font-normal size-4 leading-6 mt-4'>1000 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>14$</h5>
                        </div>
                    </div>
                    <div className='w-[760px] h-[111px] flex gap-[400px] mt-10'>
                        <div className='mt-'>
                            <h5 className='w-[294px] h-[32px] font-bold text-[24px] size-6 leading-8'>Spicy Vegan Potato Curry</h5>
                            <p className='w-[368px] h-[24px] font-normal size-4 leading-6 mt-4'>Spreadable cream cheese crumbled blue cheese</p>
                            <p className='w-[63px] h-[24px] font-normal size-4 leading-6 mt-8'>560 CAL</p>
                            </div>
                        <div>
                            <h5 className='w-[41px] h-[32px] font-bold text-[24px] size-6 leading-8 text-[#FF9F0D]'>35$</h5>
                        </div>
                    </div>
                </div>


            </div>
            <div className='w-[448px] h-[626px] mt-4 '><Image src={'/images/menuHeroBurgerPic.png'} alt='photo' width={448} height={626} ></Image></div>
        </div>
        {/* <div className='w-[1920] h-[468] bg-[#0D0D0DD9] absolute top-[2027px] left-[-1px] px-[300px] py-[150px]'>
        <Image src={'/images/menuHeroLastPic.png'} alt='photo' width={1314} height={255} ></Image>

        </div> */}
    </div>


    
  );
}

export default MHero
