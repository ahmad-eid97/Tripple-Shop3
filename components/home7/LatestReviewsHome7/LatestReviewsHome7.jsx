import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const LatestReviewsHome7 = () => {
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
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  }

  return (
    <>
      <section className="ps-section--reviews ps-reviews--2">
          <h3 className="ps-section__title"> <img src="img/quote-icon.png" alt />Latest reviews</h3>
          <div className="ps-section__content">

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <div className="ps-review" style={{ minHeight: '250px' }}>
                    <div className="ps-review__text">There was a small mistake in the order. In return, I got the correct order and I could keep the wrong one for myself.</div>
                    <div className="ps-review__name">Esther Howard</div>
                    <div className="ps-review__review">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ps-review" style={{ minHeight: '250px' }}>
                    <div className="ps-review__text">I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</div>
                    <div className="ps-review__name">Albert Flores</div>
                    <div className="ps-review__review">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ps-review" style={{ minHeight: '250px' }}>
                    <div className="ps-review__text">Everything is perfect. I would recommend!</div>
                    <div className="ps-review__name">Darlene Robertson</div>
                    <div className="ps-review__review">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ps-review" style={{ minHeight: '250px' }}>
                    <div className="ps-review__text">There was a small mistake in the order. In return, I got the correct order and I could keep the wrong one for myself.</div>
                    <div className="ps-review__name">Brooklyn Simmons</div>
                    <div className="ps-review__review">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ps-review" style={{ minHeight: '250px' }}>
                    <div className="ps-review__text">Everything is perfect. I would recommend!</div>
                    <div className="ps-review__name">Kristin Watson</div>
                    <div className="ps-review__review">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ps-review" style={{ minHeight: '250px' }}>
                    <div className="ps-review__text">I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</div>
                    <div className="ps-review__name">Mark J.</div>
                    <div className="ps-review__review">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                    </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
      </section>
    </>
  )
}

export default LatestReviewsHome7