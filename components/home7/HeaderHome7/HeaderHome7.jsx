import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const HeaderHome7 = () => {
  return (
    <>
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <section className="ps-banner--home7" data-background="img/promotion/slide7.jpg">
            <div className="ps-banner__round"><img src="img/round5.png" alt="" /></div>
            <div className="ps-banner">
                <div className="container">
                    <div className="ps-banner__block">
                        <div className="ps-banner__thumnail">
                            <div className="ps-banner__persen bg-success">New</div>
                        </div>
                        <div className="ps-banner__content">
                            <p className="ps-banner__baged"><strong>New</strong></p>
                            <h2 className="ps-banner__title">SonicX900 <br />Electrical Brush</h2>
                            <div className="ps-banner__desc">Now with special price -30%</div>
                            <div className="ps-banner__btn-group">
                                <div className="ps-banner__btn"><img src="img/icon5.png" alt />Anti-Bacterial</div>
                                <div className="ps-banner__btn"><img src="img/icon6.png" alt />Anti-Virus</div>
                            </div><a className="ps-banner__shop bg-warning" href="category-list.html">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="ps-home7--promo" data-background="img/goby-unsplash.jpg">
            <div className="ps-banner">
                <div className="container">
                    <div className="ps-banner__block">
                        <div className="ps-banner__content">
                            <p className="ps-banner__baged"><strong>New</strong></p>
                            <h2 className="ps-banner__title">New stylish colors <br />now available!</h2>
                            <div className="ps-banner__desc">Choose a color that really <br />matches your personality</div><a className="ps-banner__shop bg-pink" href="category-list.html">Shop now</a>
                        </div>
                        <div className="ps-banner__thumnail"></div>
                    </div>
                </div>
            </div>
        </section>
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default HeaderHome7