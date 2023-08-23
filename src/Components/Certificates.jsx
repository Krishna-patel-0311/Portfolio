import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const data = [
    {
        "name": "ASP_MVC.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1WYmXi88k_PW1x5hDDxSDujFjO-ytw-dg"
    },
    {
        "name": "C#.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1VxCfosrsOIHGs5y3a_k-ijihFzIpLqB8"
    },
    {
        "name": "CCF.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1dxXdk-DTdFcn2Q-GRE-cnVcK_ia09g_u"
    },
    {
        "name": "CCF2.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1XoTqruJH9Kbs8m4vp6pwmg09O8JUp882"
    },
    {
        "name": "CSS.jpg",
        "path": "https://drive.google.com/uc?export=view&id=10e6RyWj0m4kX83Eqhi6VbsgrfcOTWXSw"
    },
    {
        "name": "DSE.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1317Hvz1JSbPf4IhzjOCJCro0eFbRGUdR"
    },
    {
        "name": "HTML.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1W7lbwXPYgtQFQtERgOBIVs9Az7C1S36B"
    },
    {
        "name": "JQUERY.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1zfQcHXBF9xPglKHsnCsmD77AqQ0ZuhGb"
    },
    {
        "name": "JS_BASIC.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1cN_keFWQAGcwqvpMQ9vTdK2ZCbZSZWML"
    },
    {
        "name": "JS_INTERMIDIATE.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1GI_79ORXqOLTv4YtLoyVaSWwclqKFkQq"
    },
    {
        "name": "NODE_BASIC.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1D5BXHfCDcg-lF-bL6FMKEND09gQO9ulE"
    },
    {
        "name": "PHP.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1wlmScojNb_rs-dLoKyauOBVTo-rU8BJ5"
    },
    {
        "name": "PYTHON.jpg",
        "path":"https://drive.google.com/uc?export=view&id=1c8Xjfv5w3aAtwq9JjerterAAs4gf_RuY"
    },
    {
        "name": "REACT.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1mBNH4bTMbT0Db7yjFUPpKTVNtzPT4FK_"
    },
    {
        "name": "SQL.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1pXNGIVjGXQQQVpLYwddX_1YEn59lWdqh"
    },
    {
        "name": "SQL_INTERMEDIATE.jpg",
        "path": "https://drive.google.com/uc?export=view&id=1ylDV5vQ8tORFk3PUaH9VvOZnz00qCICJ"
    }
]
localStorage.setItem("certificate",JSON.stringify(data))
export default function Certificates() {
const [Images,setImages] = useState([])
useEffect(()=>{
  const img = JSON.parse(localStorage.getItem("certificate"))
  if(img){
    setImages(img)
  }
},[])
  const slides = Images.map((item, index) => {
    return <SwiperSlide key={index}>
      <div>
        <h4 className='text-center text-light mb-2'>{item.name}</h4>
<img style={{objectFit:"cover"}} src={item.path} alt="pic"/>
      </div>
    </SwiperSlide>
  })

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <section id="#certificate" className='mt-5 py-5'>

<Swiper
        freeMode={true}
        grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1260: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
 {slides}
    </Swiper>
    </section>
  )
}

