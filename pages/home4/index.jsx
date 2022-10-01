/* eslint-disable @next/next/no-img-element */
import { 
    NavbarHome4, 
    HeaderHome4, 
    LatestProductsHome4, 
    BestDealsHome4, 
    FeaturedProductsHome4, 
    BestSellerHome4, 
    PopularProductsHome4,
    FooterHome4
} from '../../components';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from "../../store/store";

const Home4 = () => {
    const breakpoints = {
      // when window width is >= 640px
      200: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 4,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 7,
      },
      1400: {
        slidesPerView: 7,
      },
    }

  return (
    <>
      <div className="ps-page">

        {/* NAVBAR SECTION */}
        <NavbarHome4 />

        <div className="ps-home ps-home--4">
            <div className="container">
                <section className="ps-section--category-horizontal">
                    <div className="container">
                        <div className="ps-category__carousel">
                            <Swiper
                                spaceBetween={0}
                                breakpoints={breakpoints}
                            >
                                <SwiperSlide>
                                    <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/plastercross.svg" alt /></a>
                                        <h5 className="ps-category__name"><a href="category-grid.html">Bandages</a></h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/capsule.svg" alt /></a>
                                        <h5 className="ps-category__name"><a href="category-grid.html">Capsules</a></h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/dental.svg" alt /></a>
                                        <h5 className="ps-category__name"><a href="category-grid.html">Dental</a></h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/thermometer.svg" alt /></a>
                                        <h5 className="ps-category__name"><a href="category-grid.html">Thermometer</a></h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/heart-healt.svg" alt /></a>
                                        <h5 className="ps-category__name"><a href="category-grid.html">Heart Health</a></h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/microscope.svg" alt /></a>
                                        <h5 className="ps-category__name"><a href="category-grid.html">Micrscope</a></h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/tube.svg" alt /></a>
                                        <h5 className="ps-category__name"><a href="category-grid.html">Tubes</a></h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/tube.svg" alt /></a>
                                        <h5 className="ps-category__name"><a href="category-grid.html">Tubes</a></h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/tube.svg" alt /></a>
                                        <h5 className="ps-category__name"><a href="category-grid.html">Tubes</a></h5>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </div>
            
            {/* HEADER SECTION */}
            <HeaderHome4 />

            <div className="ps-home__content">
                <div className="container">
                    <div className="ps-promo">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="ps-promo__item"><img className="ps-promo__banner" src="img/promotion/bg-banner2.jpg" alt="alt" />
                                    <div className="ps-promo__content">
                                        <h4 className="ps-promo__name">Digital <br/>Thermometer <br/>X30-Pro</h4>
                                        <div className="ps-promo__sale">-10%</div><a className="ps-promo__btn" href="category-grid.html">Shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="ps-promo__item"><img className="ps-promo__banner" src="img/promotion/bg-banner8.jpg" alt="alt" />
                                    <div className="ps-promo__content">
                                        <h4 className="text-white ps-promo__name">Hubble <br/>Eye <br/>Lenses</h4>
                                        <div className="ps-promo__sale text-yellow">-12%</div><a className="ps-promo__btn" href="category-grid.html">Shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="ps-promo__item"><img className="ps-promo__banner" src="img/promotion/bg-banner7.jpg" alt="alt" />
                                    <div className="ps-promo__content"><span className="ps-promo__badge">New</span>
                                        <h4 className="mb-20 ps-promo__name">SuperBrush <br/>X200 Higenic <br/>ProMaster</h4><a className="ps-promo__btn" href="category-grid.html">More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LATEST PRODUCTS SECTION */}
                <LatestProductsHome4 />

                <div className="container">

                    {/* BEST DEALS SECTION */}
                    <BestDealsHome4 />

                    <div className="ps-banner__padding">
                        <section className="ps-home__banner">
                            <div className="ps-banner" style={{ background:'#103178' }}><img className="ps-banner__overlay" src="img/promotion/home4-banner-4.jpg" alt="alt" />
                                <div className="ps-banner__block">
                                    <div className="ps-banner__content">
                                        <h2 className="ps-banner__title text-white">PowerSteel <br/>X-tra 200 Brush</h2>
                                        <div className="ps-banner__price"> <span className="text-yellow">$25.99</span>
                                            <del>$15.99</del>
                                        </div><a className="bg-yellow ps-banner__shop" href="#">Add to cart</a>
                                    </div>
                                    <div className="ps-banner__thumnail">
                                        <div className="ps-banner__persen bg-yellow">-30%</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* FEATURED PRODUCTS SECTION */}
                    <FeaturedProductsHome4 />

                    <section className="ps-home__banner">
                        <div className="ps-banner" style={{ background:'#FFCC00' }}><img className="ps-banner__overlay" src="img/promotion/bg.jpg" alt="alt" />
                            <div className="ps-banner__block">
                                <div className="ps-banner__content">
                                    <h2 className="ps-banner__title">Fully equipped <br/>of ophthalmic rooms</h2>
                                    <div className="ps-banner__btn-group">
                                        <div className="ps-banner__btn"><img src="img/icon3.png" alt="alt" />Anti-Bacterial</div>
                                        <div className="ps-banner__btn"><img src="img/icon4.png" alt="alt" />Anti-Virus</div>
                                    </div><a className="bg-warning ps-banner__shop" href="#">Add to cart</a>
                                </div>
                                <div className="ps-banner__thumnail">
                                    <div className="ps-banner__persen bg-yellow ps-right">-30%</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BEST SELLER SECTION */}
                    <BestSellerHome4 />

                    <section className="ps-home__banner">
                        <div className="ps-banner" style={{ background:'#FFCC00' }}><img className="ps-banner__overlay" src="img/promotion/anti-virus-bg.jpg" alt="alt" />
                            <div className="ps-banner__block">
                                <div className="ps-banner__content">
                                    <h2 className="ps-banner__title text-white">Antibacterial <br/>Medical Mask</h2>
                                    <div className="ps-banner__btn-group">
                                        <div className="ps-banner__btn text-warning"><img src="img/icon5.png" alt="alt" />Anti-Bacterial</div>
                                        <div className="ps-banner__btn text-warning"><img src="img/icon6.png" alt="alt" />Anti-Virus</div>
                                    </div><a className="bg-warning ps-banner__shop" href="#">Add to cart</a>
                                </div>
                                <div className="ps-banner__thumnail">
                                    <div className="ps-banner__persen bg-warning ps-left">-30%</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* POPULAR PRODUCTS SECTION */}
                    <PopularProductsHome4 />

                    <section className="ps-home__banner">
                        <div className="ps-banner" style={{ background:'#FFCC00' }}><img className="ps-banner__overlay" src="img/promotion/bg-banner-detal.jpg" alt="alt" />
                            <div className="ps-banner__block">
                                <div className="ps-banner__content">
                                    <h2 className="ps-banner__title">Super Sonic Brush <br/>X200 Higenic</h2>
                                    <div className="ps-banner__btn-group">
                                        <div className="ps-banner__btn"><img src="img/tooth-brush-icon.png" alt="alt" />Anti-Bacterial</div>
                                        <div className="ps-banner__btn"><img src="img/dashboard-icon.png" alt="alt" />Anti-Virus</div>
                                    </div><a className="bg-warning ps-banner__shop" href="#">Add to cart</a>
                                </div>
                                <div className="ps-banner__thumnail">
                                    <div className="ps-banner__persen bg-primary">-30%</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ps-section--newsletter" data-background="img/newsletter-bg.jpg">
                        <h3 className="ps-section__title">Join our newsletter and get <br />$20 discount for your first order</h3>
                        <div className="ps-section__content">
                            <form action="do_action" method="post">
                                <div className="ps-form--subscribe">
                                    <div className="ps-form__control">
                                        <input className="form-control ps-input" type="email" placeholder="Enter your email address" />
                                        <button className="ps-btn ps-btn--warning">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        {/* FOOTER SECTION */}
        <FooterHome4 />

      </div>
      <div className="ps-search">
          <div className="ps-search__content ps-search--mobile"><a className="ps-search__close" href="#" id="close-search"><i className="icon-cross"></i></a>
              <h3>Search</h3>
              <form action="do_action" method="post">
                  <div className="ps-search-table">
                      <div className="input-group">
                          <input className="form-control ps-input" type="text" placeholder="Search for products" />
                          <div className="input-group-append"><a href="#"><i className="fa fa-search"></i></a></div>
                      </div>
                  </div>
              </form>
              <div className="ps-search__result">
                  <div className="ps-search__item">
                      <div className="ps-product ps-product--horizontal">
                          <div className="ps-product__thumbnail"><a className="ps-product__image" href="#">
                                  <figure><img src="img/products/052.jpg" alt="alt" /></figure>
                              </a></div>
                          <div className="ps-product__content">
                              <h5 className="ps-product__title"><a>3-layer <span className='hightlight'>mask</span> with an elastic band (1 piece)</a></h5>
                              <p className="ps-product__desc">Study history up to 30 days Up to 5 users simultaneously Has HEALTH certificate</p>
                              <div className="ps-product__meta"><span className="ps-product__price">$38.24</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="ps-search__item">
                      <div className="ps-product ps-product--horizontal">
                          <div className="ps-product__thumbnail"><a className="ps-product__image" href="#">
                                  <figure><img src="img/products/033.jpg" alt="alt" /></figure>
                              </a></div>
                          <div className="ps-product__content">
                              <h5 className="ps-product__title"><a>3 Layer Disposable Protective Face <span className='hightlight'>mask</span>s</a></h5>
                              <p className="ps-product__desc">Study history up to 30 days Up to 5 users simultaneously Has HEALTH certificate</p>
                              <div className="ps-product__meta"><span className="ps-product__price sale">$14.52</span><span className="ps-product__del">$17.24</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="ps-search__item">
                      <div className="ps-product ps-product--horizontal">
                          <div className="ps-product__thumbnail"><a className="ps-product__image" href="#">
                                  <figure><img src="img/products/051.jpg" alt="alt" /></figure>
                              </a></div>
                          <div className="ps-product__content">
                              <h5 className="ps-product__title"><a>3-Ply Ear-Loop Disposable Blue Face <span className='hightlight'>mask</span></a></h5>
                              <p className="ps-product__desc">Study history up to 30 days Up to 5 users simultaneously Has HEALTH certificate</p>
                              <div className="ps-product__meta"><span className="ps-product__price sale">$14.99</span><span className="ps-product__del">$38.24</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="ps-search__item">
                      <div className="ps-product ps-product--horizontal">
                          <div className="ps-product__thumbnail"><a className="ps-product__image" href="#">
                                  <figure><img src="img/products/050.jpg" alt="alt" /></figure>
                              </a></div>
                          <div className="ps-product__content">
                              <h5 className="ps-product__title"><a>Disposable Face <span className='hightlight'>mask</span> for Unisex</a></h5>
                              <p className="ps-product__desc">Study history up to 30 days Up to 5 users simultaneously Has HEALTH certificate</p>
                              <div className="ps-product__meta"><span className="ps-product__price sale">$8.15</span><span className="ps-product__del">$12.24</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="ps-navigation--footer">
          <div className="ps-nav__item"><a href="#" id="open-menu"><i className="icon-menu"></i></a><a href="#" id="close-menu"><i className="icon-cross"></i></a></div>
          <div className="ps-nav__item"><a href="index.html"><i className="icon-home2"></i></a></div>
          <div className="ps-nav__item"><a href="my-account.html"><i className="icon-user"></i></a></div>
          <div className="ps-nav__item"><a href="wishlist.html"><i className="fa fa-heart-o"></i><span className="badge">3</span></a></div>
          <div className="ps-nav__item"><a href="shopping-cart.html"><i className="icon-cart-empty"></i><span className="badge">2</span></a></div>
      </div>
      <div className="ps-menu--slidebar">
          <div className="ps-menu__content">
              <ul className="menu--mobile">
                  <li className="menu-item-has-children"><a href="#">Products</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                      <ul className="sub-menu">
                          <li><a href="#">Wound Care</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                              <ul className="sub-menu">
                                  <li><a href="category-list.html">Bandages</a></li>
                                  <li><a href="category-list.html">Gypsum foundations</a></li>
                                  <li><a href="category-list.html">Patches and tapes</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Higiene</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                              <ul className="sub-menu">
                                  <li><a href="category-list.html">Disposable products</a></li>
                                  <li><a href="category-list.html">Face masks</a></li>
                                  <li><a href="category-list.html">Gloves</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Laboratory</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                              <ul className="sub-menu">
                                  <li><a href="category-list.html">Devices</a></li>
                                  <li><a href="category-list.html">Diagnostic tests</a></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li className="menu-item-has-children"><a href="#">Home Medical Supplies</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                      <ul className="sub-menu">
                          <li><a href="category-list.html">Diagnosis</a></li>
                          <li><a href="category-list.html">Accessories Tools</a></li>
                          <li><a href="category-list.html">Bandages</a></li>
                      </ul>
                  </li>
                  <li className="menu-item-has-children"><a href="#">Homepages</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                      <ul className="sub-menu">
                          <li><a href="index.html">Home 01</a></li>
                          <li><a href="home2.html">Home 02</a></li>
                          <li><a href="home3.html">Home 03</a></li>
                          <li><a href="home4.html">Home 04</a></li>
                          <li><a href="home5.html">Home 05</a></li>
                          <li><a href="home6.html">Home 06</a></li>
                          <li><a href="home7.html">Home 07</a></li>
                          <li><a href="home8.html">Home 08</a></li>
                          <li><a href="home9.html">Home 09</a></li>
                          <li><a href="home10.html">Home 10</a></li>
                          <li><a href="home11.html">Home 11</a></li>
                          <li><a href="home12.html">Home 12</a></li>
                          <li><a href="home13.html">Home 13</a></li>
                          <li><a href="home14.html">Home 14</a></li>
                          <li><a href="home15.html">Home 15</a></li>
                      </ul>
                  </li>
                  <li className="menu-item-has-children"><a href="category-list.html">Shop</a></li>
                  <li className="menu-item-has-children"><a href="#">Pages</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                      <ul className="sub-menu">
                          <li><a href="#">Category</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                              <ul className="sub-menu">
                                  <li><a href="category-grid.html">Grid</a></li>
                                  <li><a href="category-grid-detail.html">Grid with details</a></li>
                                  <li><a href="category-grid-green.html">Grid with header green</a></li>
                                  <li><a href="category-grid-dark.html">Grid with header dark</a></li>
                                  <li><a href="category-grid-separate.html">Grid separate</a></li>
                                  <li><a href="category-list.html">List</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Product</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                              <ul className="sub-menu">
                                  <li><a href="product1.html">Layout 01</a></li>
                                  <li><a href="product2.html">Layout 02</a></li>
                                  <li><a href="product3.html">Layout 03</a></li>
                                  <li><a href="product4.html">Layout 04</a></li>
                                  <li><a href="product5.html">Layout 05</a></li>
                                  <li><a href="product6.html">Layout 06</a></li>
                                  <li><a href="product7.html">Layout 07</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Pages</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                              <ul className="sub-menu">
                                  <li><a href="404.html">404</a></li>
                                  <li><a href="about-us.html">About us</a></li>
                                  <li><a href="my-account.html">My Account</a></li>
                                  <li><a href="coming-soon.html">Coming soon</a></li>
                                  <li><a href="blog-post1.html">Blog post 1</a></li>
                                  <li><a href="blog-post2.html">Blog post 2</a></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li className="menu-item-has-children"><a href="#">Collection</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                      <ul className="sub-menu">
                          <li><a href="category-list.html">Face masks</a></li>
                          <li><a href="category-list.html">Dental</a></li>
                          <li><a href="category-list.html">Micrscope</a></li>
                      </ul>
                  </li>
                  <li className="menu-item-has-children"><a href="blog-sidebar1.html">Blog</a></li>
                  <li className="menu-item-has-children"><a href="contact-us.html">Contact</a></li>
              </ul>
          </div>
          <div className="ps-menu__footer">
              <div className="ps-menu__item">
                  <ul className="ps-language-currency">
                      <li className="menu-item-has-children"><a href="#">English</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                          <ul className="sub-menu">
                              <li><a href="#">Français</a></li>
                              <li><a href="#">Deutsch</a></li>
                          </ul>
                      </li>
                      <li className="menu-item-has-children"><a href="#">USD</a><span className="sub-toggle"><i className="fa fa-chevron-down"></i></span>
                          <ul className="sub-menu">
                              <li><a href="#">USD</a></li>
                              <li><a href="#">EUR</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
              <div className="ps-menu__item">
                  <div className="ps-menu__contact">Need help? <strong>0020 500 - MYMEDI - 000</strong></div>
              </div>
          </div>
      </div>
      <button className="btn scroll-top"><i className="fa fa-angle-double-up"></i></button>
      <div className="ps-preloader" id="preloader">
          <div className="ps-preloader-section ps-preloader-left"></div>
          <div className="ps-preloader-section ps-preloader-right"></div>
      </div>
      <div className="modal fade" id="popupQuickview" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-centered ps-quickview">
              <div className="modal-content">
                  <div className="modal-body">
                      <div className="wrap-modal-slider container-fluid ps-quickview__body">
                          <button className="close ps-quickview__close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <div className="ps-product--detail">
                              <div className="row">
                                  <div className="col-12 col-xl-6">
                                      <div className="ps-product--gallery">
                                          <div className="ps-product__thumbnail">
                                              <div className="slide"><img src="img/products/001.jpg" alt="alt" /></div>
                                              <div className="slide"><img src="img/products/047.jpg" alt="alt" /></div>
                                              <div className="slide"><img src="img/products/047.jpg" alt="alt" /></div>
                                              <div className="slide"><img src="img/products/008.jpg" alt="alt" /></div>
                                              <div className="slide"><img src="img/products/034.jpg" alt="alt" /></div>
                                          </div>
                                          <div className="ps-gallery--image">
                                              <div className="slide">
                                                  <div className="ps-gallery__item"><img src="img/products/001.jpg" alt="alt" /></div>
                                              </div>
                                              <div className="slide">
                                                  <div className="ps-gallery__item"><img src="img/products/047.jpg" alt="alt" /></div>
                                              </div>
                                              <div className="slide">
                                                  <div className="ps-gallery__item"><img src="img/products/047.jpg" alt="alt" /></div>
                                              </div>
                                              <div className="slide">
                                                  <div className="ps-gallery__item"><img src="img/products/008.jpg" alt="alt" /></div>
                                              </div>
                                              <div className="slide">
                                                  <div className="ps-gallery__item"><img src="img/products/034.jpg" alt="alt" /></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-12 col-xl-6">
                                      <div className="ps-product__info">
                                          <div className="ps-product__badge"><span className="ps-badge ps-badge--instock"> IN STOCK</span>
                                          </div>
                                          <div className="ps-product__branch"><a href="#">HeartRate</a></div>
                                          <div className="ps-product__title"><a href="#">Blood Pressure Monitor</a></div>
                                          <div className="ps-product__rating">
                                              <select className="ps-rating" data-read-only="true">
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4" selected="selected">4</option>
                                                  <option value="5">5</option>
                                              </select><span className="ps-product__review">(5 Reviews)</span>
                                          </div>
                                          <div className="ps-product__desc">
                                              <ul className="ps-product__list">
                                                  <li>Study history up to 30 days</li>
                                                  <li>Up to 5 users simultaneously</li>
                                                  <li>Has HEALTH certificate</li>
                                              </ul>
                                          </div>
                                          <div className="ps-product__meta"><span className="ps-product__price">$77.65</span>
                                          </div>
                                          <div className="ps-product__quantity">
                                              <h6>Quantity</h6>
                                              <div className="d-md-flex align-items-center">
                                                  <div className="def-number-input number-input safari_only">
                                                      <button className="minus" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                      <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                      <button className="plus" onclick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                  </div><a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcartV2">Add to cart</a>
                                              </div>
                                          </div>
                                          <div className="ps-product__type">
                                              <ul className="ps-product__list">
                                                  <li> <span className="ps-list__title">Tags: </span><a className="ps-list__text" href="#">Health</a><a className="ps-list__text" href="#">Thermometer</a>
                                                  </li>
                                                  <li> <span className="ps-list__title">SKU: </span><a className="ps-list__text" href="#">SF-006</a>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="modal fade" id="popupCompare" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-centered ps-compare--popup">
              <div className="modal-content">
                  <div className="modal-body">
                      <div className="wrap-modal-slider ps-compare__body">
                          <button className="close ps-compare__close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <div className="ps-compare--product">
                              <div className="ps-compare__header">
                                  <div className="container">
                                      <h2>Compare Products</h2>
                                  </div>
                              </div>
                              <div className="ps-compare__content">
                                  <div className="ps-compare__table">
                                      <table className="table ps-table">
                                          <tbody>
                                              <tr>
                                                  <th></th>
                                                  <td>
                                                      <div className="ps-product__remove"><a href="#"><i className="fa fa-times"></i></a></div>
                                                      <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                              <figure><img src="img/products/001.jpg" alt /></figure>
                                                          </a></div>
                                                      <div className="ps-product__content">
                                                          <h5 className="ps-product__title"><a href="product1.html">Blood Pressure Monitor</a></h5>
                                                          <div className="ps-product__meta"><span className="ps-product__price">$77.65</span>
                                                          </div>
                                                          <button className="ps-btn ps-btn--warning">Add to cart</button>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <div className="ps-product__remove"><a href="#"><i className="fa fa-times"></i></a></div>
                                                      <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                              <figure><img src="img/products/034.jpg" alt /></figure>
                                                          </a></div>
                                                      <div className="ps-product__content">
                                                          <h5 className="ps-product__title"><a href="product1.html">Blood Pressure Monitor Upper Arm</a></h5>
                                                          <div className="ps-product__meta"><span className="ps-product__del">$64.65</span><span className="ps-product__price sale">$86.67</span>
                                                          </div>
                                                          <button className="ps-btn ps-btn--warning">Add to cart</button>
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <th>Description</th>
                                                  <td>
                                                      <ul className="ps-product__list">
                                                          <li className="ps-check-line">5 cleaning programs</li>
                                                          <li className="ps-check-line">Digital display</li>
                                                          <li className="ps-check-line">Memory for 3 user</li>
                                                      </ul>
                                                  </td>
                                                  <td>
                                                      <ul className="ps-product__list">
                                                          <li className="ps-check-line">5 cleaning programs</li>
                                                          <li className="ps-check-line">Digital display</li>
                                                          <li className="ps-check-line">Memory for 3 user</li>
                                                      </ul>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <th>Availability</th>
                                                  <td>
                                                      <p className="ps-product__text ps-check-line">in stock</p>
                                                  </td>
                                                  <td>
                                                      <p className="ps-product__text ps-check-line">in stock</p>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <th>Weight</th>
                                                  <td>
                                                      <p className="ps-product__text">10 kg</p>
                                                  </td>
                                                  <td>
                                                      <p className="ps-product__text">10 kg</p>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <th>Dimensions</th>
                                                  <td>
                                                      <p className="ps-product__text">10 × 10 × 10 cm</p>
                                                  </td>
                                                  <td>
                                                      <p className="ps-product__text">10 × 10 × 10 cm</p>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <th>Color</th>
                                                  <td>
                                                      <p className="ps-product__text">Red, Navy</p>
                                                  </td>
                                                  <td>
                                                      <p className="ps-product__text">Green</p>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <th>Sku</th>
                                                  <td>
                                                      <p className="ps-product__text">SF-006</p>
                                                  </td>
                                                  <td>
                                                      <p className="ps-product__text">BE-001</p>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <th>Price</th>
                                                  <td><span className="ps-product__price">$77.65</span>
                                                  </td>
                                                  <td><span className="ps-product__del">$64.65</span><span className="ps-product__price sale">$86.67</span>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="modal fade" id="popupLanguage" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered ps-popup--select">
              <div className="modal-content">
                  <div className="modal-body">
                      <div className="wrap-modal-slider container-fluid">
                          <button className="close ps-popup__close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <div className="ps-popup__body">
                              <h2 className="ps-popup__title">Select language</h2>
                              <ul className="ps-popup__list">
                                  <li className="language-item"> <a className="active btn" href="javascript:void(0);" data-value="English">English</a></li>
                                  <li className="language-item"> <a className="btn" href="javascript:void(0);" data-value="Deutsch">Deutsch</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="modal fade" id="popupCurrency" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered ps-popup--select">
              <div className="modal-content">
                  <div className="modal-body">
                      <div className="wrap-modal-slider container-fluid">
                          <button className="close ps-popup__close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <div className="ps-popup__body">
                              <h2 className="ps-popup__title">Select currency</h2>
                              <ul className="ps-popup__list">
                                  <li className="currency-item"> <a className="active btn" href="javascript:void(0);" data-value="USD">USD</a></li>
                                  <li className="currency-item"> <a className="btn" href="javascript:void(0);" data-value="EUR">EUR</a></li>
                                  <li className="currency-item"> <a className="btn" href="javascript:void(0);" data-value="JPY">JPY</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="modal fade" id="popupAddcart" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered ps-addcart">
              <div className="modal-content">
                  <div className="modal-body">
                      <div className="wrap-modal-slider container-fluid ps-addcart__body">
                          <button className="close ps-addcart__close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <p className="ps-addcart__noti"> <i className="fa fa-check"> </i>Added to cart succesfully</p>
                          <div className="row">
                              <div className="col-12 col-md-6">
                                  <div className="ps-product ps-product--standard">
                                      <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                              <figure><img src="img/products/015.jpg" alt="alt" /><img src="img/products/040.jpg" alt="alt" />
                                              </figure>
                                          </a>
                                          <div className="ps-product__actions">
                                              <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa fa-heart-o"></i></a></div>
                                              <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                              <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                              <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                          </div>
                                          <div className="ps-product__badge">
                                              <div className="ps-badge ps-badge--sale">Sale</div>
                                          </div>
                                      </div>
                                      <div className="ps-product__content">
                                          <h5 className="ps-product__title"><a href="product1.html">Lens Frame Professional Adjustable Multifunctional</a></h5>
                                          <div className="ps-product__meta"><span className="ps-product__price sale">$89.65</span><span className="ps-product__del">$60.65</span>
                                          </div>
                                          <div className="ps-product__rating">
                                              <select className="ps-rating" data-read-only="true">
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5" selected="selected">5</option>
                                              </select><span className="ps-product__review">( Reviews)</span>
                                          </div>
                                          <div className="ps-product__desc">
                                              <ul className="ps-product__list">
                                                  <li>Study history up to 30 days</li>
                                                  <li>Up to 5 users simultaneously</li>
                                                  <li>Has HEALTH certificate</li>
                                              </ul>
                                          </div>
                                          <div className="ps-product__actions ps-product__group-mobile">
                                              <div className="ps-product__quantity">
                                                  <div className="def-number-input number-input safari_only">
                                                      <button className="minus" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                      <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                      <button className="plus" onclick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                  </div>
                                              </div>
                                              <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                              <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                              <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa fa-heart-o"></i></a></div>
                                              <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6">
                                  <div className="ps-addcart__content">
                                      <p>There are two items in your cart.</p>
                                      <p className="ps-addcart__total">Total: <span className="ps-price">$44.00</span></p><a className="ps-btn ps-btn--border" href="#" data-dismiss="modal" aria-label="Close">Continue shopping</a><a className="ps-btn ps-btn--border" href="shopping-cart.html">View cart</a><a className="ps-btn ps-btn--warning" href="checkout.html">Proceed to checkout</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="modal fade" id="popupAddcartV2" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered ps-addcart">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="wrap-modal-slider container-fluid ps-addcart__body">
                        <div className="ps-addcart__overlay">
                            <div className="ps-addcart__loading"></div>
                        </div>
                        <button className="close ps-addcart__close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <p className="ps-addcart__noti"> <i className="fa fa-check"> </i>Added to cart succesfully</p>
                        <div className="ps-addcart__product">
                            <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail"><a className="ps-product__image" href="#">
                                        <figure><img src="img/products/015.jpg" alt /><img src="img/products/040.jpg" alt /></figure>
                                    </a></div>
                                <div className="ps-product__content">
                                    <div className="ps-product__title"><a>Lens Frame Professional Adjustable Multifunctional</a></div>
                                    <div className="ps-product__quantity"><span>x2</span></div>
                                    <div className="ps-product__meta"><span className="ps-product__price">$89.65</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="ps-addcart__header">
                            <h3>Want o add one of these?</h3>
                            <p>People who buy this product buy also:</p>
                        </div>
                        <div className="ps-addcart__content">
                            <div className="owl-carousel" data-owl-auto="false" data-owl-loop="true" data-owl-speed="15000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="true" data-owl-item="3" data-owl-item-xs="1" data-owl-item-sm="2" data-owl-item-md="2" data-owl-item-lg="3" data-owl-item-xl="3" data-owl-duration="1000" data-owl-mousedrag="on">
                                <div className="ps-product ps-product--standard">
                                    <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                            <figure><img src="img/products/015.jpg" alt="alt" /><img src="img/products/040.jpg" alt="alt" />
                                            </figure>
                                        </a>
                                        <div className="ps-product__actions">
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa fa-heart-o"></i></a></div>
                                            <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                        </div>
                                        <div className="ps-product__badge">
                                            <div className="ps-badge ps-badge--sale">Sale</div>
                                        </div>
                                    </div>
                                    <div className="ps-product__content">
                                        <h5 className="ps-product__title"><a href="product1.html">Lens Frame Professional Adjustable Multifunctional</a></h5>
                                        <div className="ps-product__meta"><span className="ps-product__price sale">$89.65</span><span className="ps-product__del">$60.65</span>
                                        </div>
                                        <div className="ps-product__rating">
                                            <select className="ps-rating" data-read-only="true">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5" selected="selected">5</option>
                                            </select><span className="ps-product__review">( Reviews)</span>
                                        </div>
                                        <div className="ps-product__desc">
                                            <ul className="ps-product__list">
                                                <li>Study history up to 30 days</li>
                                                <li>Up to 5 users simultaneously</li>
                                                <li>Has HEALTH certificate</li>
                                            </ul>
                                        </div>
                                        <div className="ps-product__actions ps-product__group-mobile">
                                            <div className="ps-product__quantity">
                                                <div className="def-number-input number-input safari_only">
                                                    <button className="minus" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                    <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                    <button className="plus" onclick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                </div>
                                            </div>
                                            <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                            <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa fa-heart-o"></i></a></div>
                                            <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-product ps-product--standard">
                                    <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                            <figure><img src="img/products/028.jpg" alt="alt" /><img src="img/products/045.jpg" alt="alt" />
                                            </figure>
                                        </a>
                                        <div className="ps-product__actions">
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa fa-heart-o"></i></a></div>
                                            <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                        </div>
                                        <div className="ps-product__badge">
                                        </div>
                                    </div>
                                    <div className="ps-product__content">
                                        <h5 className="ps-product__title"><a href="product1.html">Digital Thermometer X30-Pro</a></h5>
                                        <div className="ps-product__meta"><span className="ps-product__price sale">$60.39</span><span className="ps-product__del">$89.99</span>
                                        </div>
                                        <div className="ps-product__rating">
                                            <select className="ps-rating" data-read-only="true">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4" selected="selected">4</option>
                                                <option value="5">5</option>
                                            </select><span className="ps-product__review">( Reviews)</span>
                                        </div>
                                        <div className="ps-product__desc">
                                            <ul className="ps-product__list">
                                                <li>Study history up to 30 days</li>
                                                <li>Up to 5 users simultaneously</li>
                                                <li>Has HEALTH certificate</li>
                                            </ul>
                                        </div>
                                        <div className="ps-product__actions ps-product__group-mobile">
                                            <div className="ps-product__quantity">
                                                <div className="def-number-input number-input safari_only">
                                                    <button className="minus" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                    <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                    <button className="plus" onclick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                </div>
                                            </div>
                                            <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                            <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa fa-heart-o"></i></a></div>
                                            <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-product ps-product--standard">
                                    <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                            <figure><img src="img/products/020.jpg" alt="alt" /><img src="img/products/008.jpg" alt="alt" />
                                            </figure>
                                        </a>
                                        <div className="ps-product__actions">
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa fa-heart-o"></i></a></div>
                                            <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                        </div>
                                        <div className="ps-product__badge">
                                            <div className="ps-badge ps-badge--hot">Hot</div>
                                        </div>
                                    </div>
                                    <div className="ps-product__content">
                                        <h5 className="ps-product__title"><a href="product1.html">Bronze Blood Pressure Monitor</a></h5>
                                        <div className="ps-product__meta"><span className="ps-product__price">$56.65 - $97.65</span>
                                        </div>
                                        <div className="ps-product__rating">
                                            <select className="ps-rating" data-read-only="true">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5" selected="selected">5</option>
                                            </select><span className="ps-product__review">( Reviews)</span>
                                        </div>
                                        <div className="ps-product__desc">
                                            <ul className="ps-product__list">
                                                <li>Study history up to 30 days</li>
                                                <li>Up to 5 users simultaneously</li>
                                                <li>Has HEALTH certificate</li>
                                            </ul>
                                        </div>
                                        <div className="ps-product__actions ps-product__group-mobile">
                                            <div className="ps-product__quantity">
                                                <div className="def-number-input number-input safari_only">
                                                    <button className="minus" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                    <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                    <button className="plus" onclick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                </div>
                                            </div>
                                            <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                            <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa fa-heart-o"></i></a></div>
                                            <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ps-addcart__footer"><a className="ps-btn ps-btn--border" href="#" data-dismiss="modal" aria-label="Close">No thanks :(</a><a className="ps-btn ps-btn--warning" href="shopping-cart.html">Continue to Cart</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale, resolvedUrl }) => {
      const languageRedirection = langRedirection(req, locale);
      const routerRedirection = routeRedirection(req, resolvedUrl);

      if (languageRedirection) return languageRedirection;
      if (routerRedirection) return routerRedirection;

      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "nav"])),
          locale,
        },
      };
    }
);

export default Home4;