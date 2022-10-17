import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const HeaderHome6 = () => {
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
            <div className="ps-banner" style={{ background:'#fcfcfe' }}><img className="not-fuild ps-banner__imagebg" src="img/promotion/home6-bg.jpg" alt="alt" />
                <div className="container container-initial">
                    <div className="ps-banner__block">
                        <div className="ps-banner__content">
                            <h2 className="ps-banner__title">Antibacterial <br/>Medical Mask</h2>
                            <div className="ps-banner__desc">Just a few seconds to measure your <br/>body temperature.</div>
                            <div className="ps-banner__btn-group">
                                <div className="ps-banner__btn"><img src="img/icon1.png" alt="alt" />Anti-Bacterial</div>
                                <div className="ps-banner__btn"><img src="img/icon2.png" alt="alt" />Anti-Virus</div>
                            </div><a className="bg-warning ps-banner__shop" href="#">Shop now</a>
                            <div className="ps-banner__persen bg-yellow">only <br/> $25</div>
                        </div>
                        <div className="ps-banner__thumnail"><img className="ps-banner__round" src="img/round5.png" alt="alt" /><img className="ps-banner__image" src="img/promotion/home6-bg.jpg" alt="alt" />
                        </div>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ps-banner" style={{ background:'#fcfcfe' }}><img className="fuild ps-banner__imagebg" src="img/promotion/home6-bg2.jpg" alt="alt" />
                <div className="container container-initial">
                    <div className="ps-banner__block">
                        <div className="ps-banner__content">
                            <h2 className="ps-banner__title">Dental office <br/> equipement <br/> on sale</h2>
                            <div className="ps-banner__desc">Only in this week. Don’t misss!</div>
                            <div className="ps-banner__price"> <span>$15.99</span>
                                <del>$29.99</del>
                            </div><a className="bg-warning ps-banner__shop" href="#">Shop now</a>
                            <div className="ps-banner__persen bg-primary">-30%</div>
                        </div>
                        <div className="ps-banner__thumnail ps-banner__fluid"><img className="ps-banner__image" src="img/promotion/home6-bg2.jpg" alt="alt" />
                        </div>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ps-banner" style={{ background:'rgb(243 245 244)' }}><img className="fuild ps-banner__imagebg" src="img/promotion/home6-bg3.jpg" alt="alt" />
                <div className="container container-initial">
                    <div className="ps-banner__block">
                        <div className="ps-banner__content">
                            <h2 className="ps-banner__title">Best prices <br/> for all the lenses</h2>
                            <div className="ps-banner__desc">All correction values</div>
                            <div className="ps-banner__text">Up to -30%</div><a className="bg-warning ps-banner__shop" href="#">Shop now</a>
                        </div>
                        <div className="ps-banner__thumnail ps-banner__fluid"><img className="ps-banner__image" src="img/promotion/home6-bg3.jpg" alt="alt" />
                        </div>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default HeaderHome6;