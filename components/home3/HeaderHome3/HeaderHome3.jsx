import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const HeaderHome3 = () => {
  return (
    <section className="ps-section--banner">
        <div className="ps-section__overlay">
            <div className="ps-section__loading"></div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <div className="ps-banner" style={{ background:'#F0F2F50' }}>
                    <div className="container container-initial">
                        <div className="ps-banner__block">
                            <div className="ps-banner__content">
                                <h2 className="ps-banner__title">Antibacterial<br/> Medical Mask</h2>
                                <div className="ps-banner__desc">Just a few seconds to measure your body temperature.</div>
                                <div className="ps-banner__btn-group">
                                    <div className="ps-banner__btn"><img src="img/icon3.png" alt="alt" />Anti-Bacterial</div>
                                    <div className="ps-banner__btn"><img src="img/icon4.png" alt="alt" />Anti-Virus</div>
                                </div><a className="bg-warning ps-banner__shop" href="#">Shop now</a>
                                <div className="ps-banner__persen bg-yellow ps-top"><small>only</small>$25</div>
                            </div>
                            <div className="ps-banner__thumnail"><img className="ps-banner__round" src="img/round5.png" alt="alt" /><img className="ps-banner__image" src="img/promotion/slide3.png" alt="alt" />
                            </div>
                        </div>
                    </div>
                </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="ps-banner" style={{ background:'#103178' }}>
                <div className="container container-initial">
                    <div className="ps-banner__block">
                        <div className="ps-banner__content">
                            <h2 className="ps-banner__title text-white">PowerSteel <br/> X-tra 200 Brush</h2>
                            <div className="ps-banner__desc text-white">Only in this week. Don’t misss!</div>
                            <div className="ps-banner__price"> <span className="text-yellow">$29.99</span>
                                <del>$15.99</del>
                            </div><a className="bg-yellow ps-banner__shop" href="#">Add to cart</a>
                            <div className="ps-banner__persen bg-yellow">-30%</div>
                        </div>
                        <div className="ps-banner__thumnail ps-banner__fluid"><img className="ps-banner__image" src="img/promotion/bg-slide3-home3.jpg" alt="alt" />
                        </div>
                    </div>
                </div>
            </div>
          </SwiperSlide>

        </Swiper>
    </section>
  )
}

export default HeaderHome3;