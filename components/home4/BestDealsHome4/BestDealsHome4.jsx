import ProductBox from '../../ProductBox/ProductBox';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const BestDealsHome4 = () => {
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
    <section className="ps-section--deals">
        <div className="ps-section__header">
            <h3 className="ps-section__title">Best Deals of the week!</h3>
            <div className="ps-countdown">
                <div className="ps-countdown__content">
                    <div className="ps-countdown__block ps-countdown__days">
                        <div className="ps-countdown__number"><span className="first-1st">0</span><span className="first">0</span><span className="last">0</span></div>
                        <div className="ps-countdown__ref">Days</div>
                    </div>
                    <div className="ps-countdown__block ps-countdown__hours">
                        <div className="ps-countdown__number"><span className="first">0</span><span className="last">0</span></div>
                        <div className="ps-countdown__ref">Hours</div>
                    </div>
                    <div className="ps-countdown__block ps-countdown__minutes">
                        <div className="ps-countdown__number"><span className="first">0</span><span className="last">0</span></div>
                        <div className="ps-countdown__ref">Mins</div>
                    </div>
                    <div className="ps-countdown__block ps-countdown__seconds">
                        <div className="ps-countdown__number"><span className="first">0</span><span className="last">0</span></div>
                        <div className="ps-countdown__ref">Secs </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ps-section__carousel">
            <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
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
            </Swiper>
        </div>
    </section>
  )
}

export default BestDealsHome4