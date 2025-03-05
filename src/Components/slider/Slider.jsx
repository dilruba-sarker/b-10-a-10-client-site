// import React, { useEffect, useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// import image1 from './././../../assets/images/img.jpg';
// import image2 from '../../assets/images/img2.jpg';
// import image3 from '../../assets/images/img3.jpg';
// // 


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

//   import './slider.css';
  

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// export default function Slider() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   useEffect(() => {
//     Aos.init({ duration: 1000 }); 
//   }, []);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <>
//   <p  data-aos="fade-up" data-aos-anchor-placement="top-center" className=' absolute text-4xl text-red-500 font-bold  flex justify-center left-30 top-48 z-10'>Our Campaign to donate for winter Cloths</p>
  
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide className='absolute'>
//            <p> <img src={image1} alt="Slide 1" /></p> 
//             <h1 className='relative text-3xl -ml-8'>We are happpy</h1>
//              </SwiperSlide>
//         <SwiperSlide className=''><img src={image2} alt="Slide 2" /></SwiperSlide>
//         <SwiperSlide className=''><img src={image3} alt="Slide 3" /></SwiperSlide>

       
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </>
//   );
// }
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import images
import image1 from '../../assets/images/img.jpg';
import image2 from '../../assets/images/img2.jpg';
import image3 from '../../assets/images/img3.jpg';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img src={image1} alt="Winter donation campaign - Slide 1" className="w-full" />
            <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded-lg">
              <h1 className="text-3xl font-bold">Helping Those in Need</h1>
              <p className="text-lg">Join us in providing warm clothes for the winter.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img src={image2} alt="Winter donation campaign - Slide 2" className="w-full" />
            <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded-lg">
              <h1 className="text-3xl font-bold">Spread Warmth</h1>
              <p className="text-lg">Your donations can make a difference.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img src={image3} alt="Winter donation campaign - Slide 3" className="w-full" />
            <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded-lg">
              <h1 className="text-3xl font-bold">Together We Can</h1>
              <p className="text-lg">Let’s make this winter warmer for everyone.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Autoplay Progress */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}