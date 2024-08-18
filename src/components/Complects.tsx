// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ComplectsCard from './ComplectsCard';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import React from 'react';
import { apiProductType } from '../helpers/types';
import { productData } from '../helpers';

interface complectType{
  product: apiProductType,
}

const Complects:React.FC<complectType> = ({ product}) => {
  const complects:apiProductType[] = []
  product.complect.map(i => {
    const ss = productData.filter(p => p.name === i)
    complects.push(ss[0])
    window.scrollTo({top: 0, behavior: 'instant'})
  })

 
  

  return (  
    <div className='px-[5%] py-24'>
        <p className="header-page montserrat-medium mb-5">Complete the look</p>
        <div>
            <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
                spaceBetween: 10
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 3,
                spaceBetween: 10
              },
              980: {
                width: 1100,
                slidesPerView: 3,
                spaceBetween: 10
              },
            }}    
            mousewheel={{ forceToAxis: true }}
            keyboard={{ enabled: true }}
            >
            {complects.map((item, i) => (
                <SwiperSlide key={i}>
                  <ComplectsCard item={item} i={i} /> 
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>
  )
}


export default Complects