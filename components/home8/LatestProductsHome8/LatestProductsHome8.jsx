import ProductBox from '../../ProductBox/ProductBox';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const LatestProductsHome6 = () => {
    const breakpoints = {
      // when window width is >= 640px
      200: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    }

  return (
    <section className="ps-section--latest">
        <div className="container">
            <h3 className="ps-section__title">Latest products</h3>
            <div className="ps-section__carousel">

                <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={4}
                navigation
                breakpoints={breakpoints}
                >
                    <SwiperSlide>
                        <ProductBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductBox />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default LatestProductsHome6