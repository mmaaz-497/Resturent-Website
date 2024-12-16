import React from 'react';
import Image from 'next/image';

const BlogHero = () => {
  return (
    <div>
        <div className='w-[1920px] h-[3800px] bg-[#E0E0E0] text-black flex gap-[900px]'>
            <div>
            <div className='w-[872px] h-[830px] absolute top-[600px] left-[300px]'>
                <div className='w-[872px] h-[830px]'>
                    <Image src={'/images/blogPic1.png'} alt='photo' width={871} height={520} ></Image>
                
                    <div className='flex gap-2 mt-8'>
                        <div><Image src={'/images/blogCalendar.png'} alt='photo' width={24} height={24} ></Image></div>
                        <div><Image src={'/images/blogAdmin.png'} alt='photo' width={267} height={24} ></Image></div>
                    </div>
                    <h5 className='w-[504px] h-[32px] font-bold text-[24px] size-6 leading-6 mt-8'>10 Reasons To Do A Digital Detox Challenge</h5>
                    <p className='w-[648px] h-[96px] font-normal size-4 leading-6 mt-8'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    <div className='w-[178px] h-[52px] flex gap-[10px] border rounded-md px-8 py-[14px] mt-8'>
                        <h1 className='w-[80px] h-[24px] font-normal size-4 leading-6 text-[#FF9F0D] '>Read More </h1>
                        <div><Image src={'/images/blogArrowLineUpRight.png'} alt='photo' width={18} height={18} ></Image></div>
                    </div>
                </div>
            </div>

                            {/* TRADITIONAL sOFT */}

            <div className='w-[872px] h-[830px] absolute top-[1500px] left-[300px]'>
                <div className='w-[872px] h-[830px]'>
                    <Image src={'/images/blogPic2.png'} alt='photo' width={871} height={520} ></Image>
                
                    <div className='flex gap-2 mt-8'>
                        <div><Image src={'/images/blogCalendar.png'} alt='photo' width={24} height={24} ></Image></div>
                        <div><Image src={'/images/blogAdmin.png'} alt='photo' width={267} height={24} ></Image></div>
                    </div>
                    <h5 className='w-[557px] h-[32px] font-bold text-[24px] size-6 leading-6 mt-8'>Traditional Soft Pretzels with Sweet Beer Cheese</h5>
                    <p className='w-[648px] h-[96px] font-normal size-4 leading-6 mt-8'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    <div className='w-[178px] h-[52px] flex gap-[10px] border rounded-md px-8 py-[14px] mt-8'>
                        <h1 className='w-[80px] h-[24px] font-normal size-4 leading-6 text-[#FF9F0D] '>Read More </h1>
                        <div><Image src={'/images/blogArrowLineUpRight.png'} alt='photo' width={18} height={18} ></Image></div>
                    </div>
                </div>
            </div>

            
                            {/* ULTIMATE HANGOVER */}

            <div className='w-[872px] h-[830px] absolute top-[2402px] left-[300px]'>
                <div className='w-[872px] h-[830px]'>
                    <Image src={'/images/blogPic3.png'} alt='photo' width={871} height={520} ></Image>
                
                    <div className='flex gap-2 mt-8'>
                        <div><Image src={'/images/blogCalendar.png'} alt='photo' width={24} height={24} ></Image></div>
                        <div><Image src={'/images/blogAdmin.png'} alt='photo' width={267} height={24} ></Image></div>
                    </div>
                    <h5 className='w-[600px] h-[32px] font-bold text-[24px] size-6 leading-6 mt-8'>The Ultimate Hangover Burger Egg in a Hole Burger</h5>
                    <p className='w-[648px] h-[96px] font-normal size-4 leading-6 mt-8'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    <div className='w-[178px] h-[52px] flex gap-[10px] border rounded-md px-8 py-[14px] mt-8'>
                        <h1 className='w-[80px] h-[24px] font-normal size-4 leading-6 text-[#FF9F0D] '>Read More </h1>
                        <div><Image src={'/images/blogArrowLineUpRight.png'} alt='photo' width={18} height={18} ></Image></div>
                    </div>
                </div>
            </div>

          {/*BLACK PIZZA */}

            <div className='w-[872px] h-[830px] absolute top-[3300px] left-[300px]'>
                <div className='w-[872px] h-[830px]'>
                    <Image src={'/images/blogPic3.png'} alt='photo' width={871} height={520} ></Image>
                
                    <div className='flex gap-2 mt-8'>
                        <div><Image src={'/images/blogCalendar.png'} alt='photo' width={24} height={24} ></Image></div>
                        <div><Image src={'/images/blogAdmin.png'} alt='photo' width={267} height={24} ></Image></div>
                    </div>
                    <h5 className='w-[600px] h-[32px] font-bold text-[24px] size-6 leading-6 mt-8'>My Favorite Easy Black Pizza Toast Recipe</h5>
                    <p className='w-[648px] h-[96px] font-normal size-4 leading-6 mt-8'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    <div className='w-[178px] h-[52px] flex gap-[10px] border rounded-md px-8 py-[14px] mt-8'>
                        <h1 className='w-[80px] h-[24px] font-normal size-4 leading-6 text-[#FF9F0D] '>Read More </h1>
                        <div><Image src={'/images/blogArrowLineUpRight.png'} alt='photo' width={18} height={18} ></Image></div>
                    </div>
                </div>
            </div>
            <div className='w-[306px] h-[51px] relative top-[3700px] left-[583px]'>
            <Image src={'/images/blogPagination.png'} alt='photo' width={306} height={51} ></Image>
            </div>
        </div>
        <div className=' mt-16'>
        <Image src={'/images/blogSideBar.png'} alt='photo' width={424} height={2501} ></Image>
        </div>
        </div>
       
    </div>
  );
}

export default BlogHero

