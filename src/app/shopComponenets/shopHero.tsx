import React from 'react';
import Image from 'next/image';
const ShopHero = () => {
  return (
    <div>
      <div className='w-[1920px] h-[2100px] bg-[#E0E0E0] text-black '>
        <div className='w-[1320px] h-[1923px] absolute left-[300px] mt-[100px] flex gap-8'>
          {/* <div className=''>
            <div className='flex gap-8'>
              <div className='flex'>
                <b>Sort by:</b>
                <select name="" id="">
                          <option value="newest">Newest</option>
                          <option value="older">Older</option>
                </select>
              </div>
              <div>
                <b>Show:</b>
                <select name="" id="">
                          <option value="default">Default</option>
                          <option value="new">New</option>
                </select>
              </div>
              </div>
          </div> */}
            <Image className='mt-4' src={'/images/shopHeroMenuPic.png'} alt='photo' width={984} height={1923} ></Image>

          <div className='w-[312px] h-[1489px] mt-[100px]'>
            <div className='flex mb-8'>
              <input className='w-[248px] h-[46px] pl-[30px]' type="Search Products" placeholder='Search Products' />
              <div className='w-[46px] h-[46px] px-[10px] py-[10px] bg-[#FF9F0D]'><Image src={'/images/magnifyingGlass.png'} alt='photo' width={20} height={20} ></Image></div>
            </div>
            <div className='flex-none'>
              <h2 className='w-[248px] h-[28px] text-[20px] font-bold size-[20px] leading-[28px]'>Catagory</h2><br /> <br />
              <label htmlFor="sendwiches">
                <input type="checkbox" />Sandwiches
              </label>
              <label htmlFor="burger"> <br /> <br />
                <input type="checkbox" />Burger
              </label>
              <label htmlFor="chicken Chup"> <br /> <br />
                <input type="checkbox" />Chicken Chup
              </label>
              <label htmlFor="drink"> <br /> <br />
                <input type="checkbox" />Drink
              </label>
              <label htmlFor="pizza"> <br /> <br />
                <input type="checkbox" />Pizza
              </label>
              <label htmlFor="thi"> <br /> <br />
                <input type="checkbox" />Thi
              </label>
              <label htmlFor="non veg"> <br /> <br />
                <input type="checkbox" />Non Veg
              </label>
              <label htmlFor="Uncatogerized"> <br /> <br />
                <input type="checkbox" />Uncatogerized
              </label>
              <Image className='mt-4' src={'/images/shopHeroSidePic1.png'} alt='photo' width={248} height={286} ></Image>
              <h6 className='w-[248px] h-[28px] text-[20px] font-bold size-[20px] leading-[28px] mt-4'>Filter By Price</h6>
              <p className='w-[138px] h-[24px]  font-normal size-4 leading-6 text-[#1E1E1E] opacity-[61%] mt-4'>From $0 to $8000</p>              <h6 className='w-[248px] h-[28px] text-[20px] font-bold size-[20px] leading-[28px] mt-4'>Latest Products</h6>
              <div className='flex'>
                <div><Image className='mt-4' src={'/images/shopHeroSidePic2.png'} alt='photo' width={72} height={65} ></Image></div>
                <div>
                <p className='w-[164px] h-[24px]  font-normal size-4 leading-6 mt-2 ml-4'>Pizza</p>
                <Image className='ml-6 mt-2' src={'/images/shopHeroSideStarsPic.png'} alt='photo' width={62} height={9} ></Image>
                <p className='w-[163px] h-[22px]  font-normal size-[14px] text-[14px] leading-[22px] ml-5 mt-2'>$35.00</p>
                </div>
              </div>
              <div className='flex'>
                <div><Image className='mt-4' src={'/images/shopHeroSidePic2.png'} alt='photo' width={72} height={65} ></Image></div>
                <div>
                <p className='w-[161px] h-[24px]  font-normal size-4 leading-6 mt-2 ml-4'>Cupchake</p>
                <Image className='ml-6 mt-2' src={'/images/shopHeroSideStarsPic.png'} alt='photo' width={62} height={9} ></Image>
                <p className='w-[163px] h-[22px]  font-normal size-[14px] text-[14px] leading-[22px] ml-5 mt-2'>$35.00</p>
                </div>
              </div>
              <div className='flex'>
                <div><Image className='mt-4' src={'/images/shopHeroSidePic2.png'} alt='photo' width={72} height={65} ></Image></div>
                <div>
                <p className='w-[161px] h-[24px]  font-normal size-4 leading-6 mt-2 ml-4'>Cookies</p>
                <Image className='ml-6 mt-2' src={'/images/shopHeroSideStarsPic.png'} alt='photo' width={62} height={9} ></Image>
                <p className='w-[163px] h-[22px]  font-normal size-[14px] text-[14px] leading-[22px] ml-5 mt-2'>$35.00</p>
                </div>
              </div>
              <div className='flex'>
                <div><Image className='mt-4' src={'/images/shopHeroSidePic2.png'} alt='photo' width={72} height={65} ></Image></div>
                <div>
                <p className='w-[161px] h-[24px]  font-normal size-4 leading-6 mt-2 ml-4'>burger</p>
                <Image className='ml-6 mt-2' src={'/images/shopHeroSideStarsPic.png'} alt='photo' width={62} height={9} ></Image>
                <p className='w-[163px] h-[22px]  font-normal size-[14px] text-[14px] leading-[22px] ml-5 mt-2'>$35.00</p>
                </div>
              </div>
              <h6 className='w-[127px] h-[28px] text-[20px] font-bold size-[20px] leading-[28px] mt-4'>Product Tags</h6>
              <div className='flex gap-8 mt-6'>
                <p className='w-[66px] h-[24px]  font-normal size-4 leading-6'>Services</p>
                <p className='w-[75px] h-[24px]  font-normal size-4 leading-6'>Our Menu</p>
                <p className='w-[66px] h-[24px]  font-normal size-4 leading-6'>Pizza</p>
              </div>
              <div className='flex gap-8 mt-6'>
                <p className='w-[66px] h-[24px]  font-normal size-4 leading-6'>CupCakes</p>
                <p className='w-[75px] h-[24px]  font-normal size-4 leading-6 text-[#FF9F0D]'>Burger</p>
                <p className='w-[66px] h-[24px]  font-normal size-4 leading-6'>Cookies</p>
              </div>
              <div className='flex gap-8 mt-6'>
                <p className='w-[71px] h-[24px]  font-normal size-4 leading-6'>Our Shop</p>
                <p className='w-[132px] h-[24px]  font-normal size-4 leading-6'>Tandoori Chicken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ShopHero
