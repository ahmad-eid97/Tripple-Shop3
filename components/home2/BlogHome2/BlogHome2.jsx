import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const BlogHome2 = () => {
    const breakpoints2 = {
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
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    }
    4
  return (
    <section className="ps-section--blog">
        <h3 className="ps-section__title">From the blog</h3>
        <div className="ps-section__carousel">

            <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            navigation
            breakpoints={breakpoints2}
            >
            <SwiperSlide>
                <div className="ps-section__item">
                <div className="ps-blog--latset">
                    <div className="ps-blog__thumbnail">
                    <a href="blog-post1.html">
                        <img src="/img/blog-detail-image.jpg" alt="alt" />
                    </a>
                    <div className="ps-blog__badge">
                        <span className="ps-badge__item">MEDIC</span>
                        <span className="ps-badge__item">PHARMACY</span>
                        <span className="ps-badge__item">SALE</span>
                    </div>
                    </div>
                    <div className="ps-blog__content">
                    <div className="ps-blog__meta">
                        {" "}
                        <span className="ps-blog__date">May 18, 2021</span>
                        <a className="ps-blog__author" href="#">
                        Alfredo Austin
                        </a>
                    </div>
                    <a className="ps-blog__title" href="blog-post1.html">
                        [PDF REPORT] – Impact of wearing masks on social behavior
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="ps-section__item">
                <div className="ps-blog--latset">
                    <div className="ps-blog__thumbnail">
                    <a href="blog-post1.html">
                        <img src="/img/blog-detail-image.jpg" alt="alt" />
                    </a>
                    <div className="ps-blog__badge">
                        <span className="ps-badge__item">MEDIC</span>
                        <span className="ps-badge__item">PHARMACY</span>
                        <span className="ps-badge__item">SALE</span>
                    </div>
                    </div>
                    <div className="ps-blog__content">
                    <div className="ps-blog__meta">
                        {" "}
                        <span className="ps-blog__date">May 18, 2021</span>
                        <a className="ps-blog__author" href="#">
                        Alfredo Austin
                        </a>
                    </div>
                    <a className="ps-blog__title" href="blog-post1.html">
                        The latest tests of popular masks in accordance with CV2s
                        standards
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="ps-section__item">
                <div className="ps-blog--latset">
                    <div className="ps-blog__thumbnail">
                    <a href="blog-post1.html">
                        <img src="/img/blog-detail-image.jpg" alt="alt" />
                    </a>
                    <div className="ps-blog__badge">
                        <span className="ps-badge__item">MEDIC</span>
                        <span className="ps-badge__item">PHARMACY</span>
                        <span className="ps-badge__item">SALE</span>
                    </div>
                    </div>
                    <div className="ps-blog__content">
                    <div className="ps-blog__meta">
                        {" "}
                        <span className="ps-blog__date">May 18, 2021</span>
                        <a className="ps-blog__author" href="#">
                        Alfredo Austin
                        </a>
                    </div>
                    <a className="ps-blog__title" href="blog-post1.html">
                        The latest tests of popular masks in accordance with CV2s
                        standards
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="ps-section__item">
                <div className="ps-blog--latset">
                    <div className="ps-blog__thumbnail">
                    <a href="blog-post1.html">
                        <img src="/img/blog-detail-image.jpg" alt="alt" />
                    </a>
                    <div className="ps-blog__badge">
                        <span className="ps-badge__item">MEDIC</span>
                        <span className="ps-badge__item">PHARMACY</span>
                        <span className="ps-badge__item">SALE</span>
                    </div>
                    </div>
                    <div className="ps-blog__content">
                    <div className="ps-blog__meta">
                        {" "}
                        <span className="ps-blog__date">May 18, 2021</span>
                        <a className="ps-blog__author" href="#">
                        Alfredo Austin
                        </a>
                    </div>
                    <a className="ps-blog__title" href="blog-post1.html">
                        New special offer for customers who have been with us for 10
                        years
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default BlogHome2;