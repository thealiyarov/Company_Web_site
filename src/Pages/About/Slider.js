import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import "./style.css"
import 'swiper/css';
import 'swiper/css/autoplay';
import item1 from '../../Assets/item(1).jpg'
import item2 from '../../Assets/item(2).jpg'
import item3 from '../../Assets/item(3).jpg'
import item4 from '../../Assets/item(4).jpg'
import item5 from '../../Assets/item(5).jpg'
import item6 from '../../Assets/item(6).jpg'
import item7 from '../../Assets/item(7).jpg'


function Slider() {
    return (
        <Swiper 
          spaceBetween={0}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          
          loop={true}
          autoplay={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >   
          <SwiperSlide style={{display:"flex", justifyContent:"center"}}  ><img className='w-[90%]' src={item1} alt="" srcset="" /></SwiperSlide>
          <SwiperSlide style={{display:"flex", justifyContent:"center"}}  ><img className='w-[90%]' src={item2} alt="" srcset="" /></SwiperSlide>
          <SwiperSlide style={{display:"flex", justifyContent:"center"}}  ><img className='w-[90%]' src={item3} alt="" srcset="" /></SwiperSlide>
          <SwiperSlide style={{display:"flex", justifyContent:"center"}}  ><img className='w-[90%]' src={item4} alt="" srcset="" /></SwiperSlide>
          <SwiperSlide style={{display:"flex", justifyContent:"center"}}  ><img className='w-[90%]' src={item5} alt="" srcset="" /></SwiperSlide>
          <SwiperSlide style={{display:"flex", justifyContent:"center"}}  ><img className='w-[90%]' src={item6} alt="" srcset="" /></SwiperSlide>
          <SwiperSlide style={{display:"flex", justifyContent:"center"}}  ><img className='w-[90%]' src={item7} alt="" srcset="" /></SwiperSlide>
        </Swiper>
  )
}

export default Slider