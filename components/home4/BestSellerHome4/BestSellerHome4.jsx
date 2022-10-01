import { useState } from 'react';

import ProductBox from '../../productBox/ProductBox';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const BestSellerHome4 = () => {
  const [currentTab, setCurrentTab] = useState('blood')

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
    <section className="ps-section--sellers">
        <h3 className="ps-section__title">Top 5 Bestsellers in: </h3>
        <div className="ps-section__tab">
            <ul className="nav nav-tabs">
                <li className="nav-item" onClick={() => setCurrentTab('blood')}><span className={currentTab === 'blood' ? 'active nav-link' : 'nav-link'}>Blood pressure</span></li>
                <li className="nav-item" onClick={() => setCurrentTab('mask')}><span className={currentTab === 'mask' ? 'active nav-link' : 'nav-link'}>Face masks</span></li>
                <li className="nav-item" onClick={() => setCurrentTab('stomatology')}><span className={currentTab === 'stomatology' ? 'active nav-link' : 'nav-link'}>Stomatology</span></li>
            </ul>

            {currentTab === 'blood' && 
                <div>
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
            }

            {currentTab === 'mask' && 
                <div>
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
            }

            {currentTab === 'stomatology' &&
                <div>
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
            }
        </div>
    </section>
  )
}

export default BestSellerHome4