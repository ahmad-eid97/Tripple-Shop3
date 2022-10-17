import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const BestDeals = () => {
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
    <div className="container">
      <section className="ps-section--deals">
        <div className="ps-section__header">
          <h3 className="ps-section__title">Best Deals of the week!</h3>
          <div className="ps-countdown">
            <div className="ps-countdown__content">
              <div className="ps-countdown__block ps-countdown__days">
                <div className="ps-countdown__number">
                  <span className="first-1st">0</span>
                  <span className="first">0</span>
                  <span className="last">0</span>
                </div>
                <div className="ps-countdown__ref">Days</div>
              </div>
              <div className="ps-countdown__block ps-countdown__hours">
                <div className="ps-countdown__number">
                  <span className="first">0</span>
                  <span className="last">0</span>
                </div>
                <div className="ps-countdown__ref">Hours</div>
              </div>
              <div className="ps-countdown__block ps-countdown__minutes">
                <div className="ps-countdown__number">
                  <span className="first">0</span>
                  <span className="last">0</span>
                </div>
                <div className="ps-countdown__ref">Mins</div>
              </div>
              <div className="ps-countdown__block ps-countdown__seconds">
                <div className="ps-countdown__number">
                  <span className="first">0</span>
                  <span className="last">0</span>
                </div>
                <div className="ps-countdown__ref">Secs </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ps-section__carousel">

          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={4}
            navigation
            breakpoints={breakpoints}
          >
            <SwiperSlide>
              <div className="ps-section__product">
                <div className="ps-product ps-product--standard">
                  <div className="ps-product__thumbnail">
                    <a className="ps-product__image" href="product1.html">
                      <figure>
                      <img src="/img/product9.jpg" alt="alt" />
                      <img src="/img/product10.jpg" alt="alt" />
                      </figure>
                    </a>
                    <div className="ps-product__actions">
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="#">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupCompare"
                        >
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Quick view"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupQuickview"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-product__badge"></div>
                    <div className="ps-product__percent">-26%</div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">
                        Multi hook retractor surgical spinal retractors
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price sale">
                        $65.39
                      </span>
                      <span className="ps-product__del">$48.99</span>
                    </div>
                    <div className="ps-product__rating">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      {/* <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected="selected">
                          5
                        </option>
                      </select> */}
                      <span className="ps-product__review">
                        ( Reviews)
                      </span>
                    </div>
                    <div className="ps-product__footer">
                      No of pcs available <span>3 </span>
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
                          <button
                            className="minus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i className="icon-minus"></i>
                          </button>
                          <input
                            className="quantity"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button
                            className="plus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i className="icon-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="ps-product__cart">
                        {" "}
                        <a
                          className="ps-btn ps-btn--warning"
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          Add to cart
                        </a>
                      </div>
                      <div
                        className="ps-product__item cart"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a href="#">
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="wishlist.html">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a href="compare.html">
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ps-section__product">
                <div className="ps-product ps-product--standard">
                  <div className="ps-product__thumbnail">
                    <a className="ps-product__image" href="product1.html">
                      <figure>
                      <img src="/img/product13.jpg" alt="alt" />
                      <img src="/img/product14.jpg" alt="alt" />
                      </figure>
                    </a>
                    <div className="ps-product__actions">
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="#">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupCompare"
                        >
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Quick view"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupQuickview"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-product__badge"></div>
                    <div className="ps-product__percent">-54%</div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">
                        3-Ply Ear-Loop Disposable Blue Face Mask
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price sale">
                        $32.39
                      </span>
                      <span className="ps-product__del">$14.99</span>
                    </div>
                    <div className="ps-product__rating">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      {/* <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select> */}
                      <span className="ps-product__review">
                        ( Reviews)
                      </span>
                    </div>
                    <div className="ps-product__footer">
                      No of pcs available <span>13 </span>
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
                          <button
                            className="minus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i className="icon-minus"></i>
                          </button>
                          <input
                            className="quantity"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button
                            className="plus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i className="icon-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="ps-product__cart">
                        {" "}
                        <a
                          className="ps-btn ps-btn--warning"
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          Add to cart
                        </a>
                      </div>
                      <div
                        className="ps-product__item cart"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a href="#">
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="wishlist.html">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a href="compare.html">
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ps-section__product">
                <div className="ps-product ps-product--standard">
                  <div className="ps-product__thumbnail">
                    <a className="ps-product__image" href="product1.html">
                      <figure>
                      <img src="/img/product15.jpg" alt="alt" />
                      <img src="/img/product16.jpg" alt="alt" />
                      </figure>
                    </a>
                    <div className="ps-product__actions">
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="#">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupCompare"
                        >
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Quick view"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupQuickview"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-product__badge"></div>
                    <div className="ps-product__percent">-61%</div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">
                        Disposable Face Mask for Unisex
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price sale">
                        $20.39
                      </span>
                      <span className="ps-product__del">$8.15</span>
                    </div>
                    <div className="ps-product__rating">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      {/* <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected="selected">
                          5
                        </option>
                      </select> */}
                      <span className="ps-product__review">
                        ( Reviews)
                      </span>
                    </div>
                    <div className="ps-product__footer">
                      No of pcs available <span>10 </span>
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
                          <button
                            className="minus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i className="icon-minus"></i>
                          </button>
                          <input
                            className="quantity"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button
                            className="plus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i className="icon-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="ps-product__cart">
                        {" "}
                        <a
                          className="ps-btn ps-btn--warning"
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          Add to cart
                        </a>
                      </div>
                      <div
                        className="ps-product__item cart"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a href="#">
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="wishlist.html">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a href="compare.html">
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ps-section__product">
                <div className="ps-product ps-product--standard">
                  <div className="ps-product__thumbnail">
                    <a className="ps-product__image" href="product1.html">
                      <figure>
                      <img src="/img/product17.jpg" alt="alt" />
                      <img src="/img/product18.jpg" alt="alt" />
                      </figure>
                    </a>
                    <div className="ps-product__actions">
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="#">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupCompare"
                        >
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Quick view"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupQuickview"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-product__badge"></div>
                    <div className="ps-product__percent">-30%</div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">
                        Blue Hot Water Bottle, 2 Quart Capacity
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price">
                        $14.52 - $15.52
                      </span>
                    </div>
                    <div className="ps-product__rating">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      {/* <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected="selected">
                          5
                        </option>
                      </select> */}
                      <span className="ps-product__review">
                        ( Reviews)
                      </span>
                    </div>
                    <div className="ps-product__footer">
                      No of pcs available <span>22 </span>
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
                          <button
                            className="minus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i className="icon-minus"></i>
                          </button>
                          <input
                            className="quantity"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button
                            className="plus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i className="icon-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="ps-product__cart">
                        {" "}
                        <a
                          className="ps-btn ps-btn--warning"
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          Add to cart
                        </a>
                      </div>
                      <div
                        className="ps-product__item cart"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a href="#">
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="wishlist.html">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a href="compare.html">
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ps-section__product">
                <div className="ps-product ps-product--standard">
                  <div className="ps-product__thumbnail">
                    <a className="ps-product__image" href="product1.html">
                      <figure>
                      <img src="/img/product19.jpg" alt="alt" />
                      <img src="/img/product20.jpg" alt="alt" />
                      </figure>
                    </a>
                    <div className="ps-product__actions">
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="#">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupCompare"
                        >
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Quick view"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupQuickview"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-product__badge"></div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">
                        Generic Stethoscope Hearing Heartbeat Tool
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price sale">
                        $53.75
                      </span>
                      <span className="ps-product__del">$38.24</span>
                    </div>
                    <div className="ps-product__rating">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      {/* <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="2" selected="selected">
                          2
                        </option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select> */}
                      <span className="ps-product__review">
                        ( Reviews)
                      </span>
                    </div>
                    <div className="ps-product__footer">
                      No of pcs available <span>10 </span>
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
                          <button
                            className="minus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i className="icon-minus"></i>
                          </button>
                          <input
                            className="quantity"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button
                            className="plus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i className="icon-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="ps-product__cart">
                        {" "}
                        <a
                          className="ps-btn ps-btn--warning"
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          Add to cart
                        </a>
                      </div>
                      <div
                        className="ps-product__item cart"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a href="#">
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="wishlist.html">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a href="compare.html">
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ps-section__product">
                <div className="ps-product ps-product--standard">
                  <div className="ps-product__thumbnail">
                    <a className="ps-product__image" href="product1.html">
                      <figure>
                      <img src="/img/product21.jpg" alt="alt" />
                      <img src="/img/product22.jpg" alt="alt" />
                      </figure>
                    </a>
                    <div className="ps-product__actions">
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="#">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupCompare"
                        >
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Quick view"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupQuickview"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-product__badge"></div>
                    <div className="ps-product__percent">-30%</div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">
                        Blue Hot Water Bottle, 2 Quart Capacity
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price">
                        $14.52 - $15.52
                      </span>
                    </div>
                    <div className="ps-product__rating">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      {/* <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected="selected">
                          5
                        </option>
                      </select> */}
                      <span className="ps-product__review">
                        ( Reviews)
                      </span>
                    </div>
                    <div className="ps-product__footer">
                      No of pcs available <span>22 </span>
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
                          <button
                            className="minus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i className="icon-minus"></i>
                          </button>
                          <input
                            className="quantity"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button
                            className="plus"
                            onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i className="icon-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="ps-product__cart">
                        {" "}
                        <a
                          className="ps-btn ps-btn--warning"
                          href="#"
                          data-toggle="modal"
                          data-target="#popupAddcart"
                        >
                          Add to cart
                        </a>
                      </div>
                      <div
                        className="ps-product__item cart"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <a href="#">
                          <i className="fa fa-shopping-basket"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Wishlist"
                      >
                        <a href="wishlist.html">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div
                        className="ps-product__item rotate"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <a href="compare.html">
                          <i className="fa fa-align-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="ps-banner--round">
        <div className="ps-banner">
          <div className="ps-banner__block">
            <div className="ps-banner__content">
              <div className="ps-logo">
                <a href="index.html">
                  {" "}
                      <img src="/img/banner1.png" alt="alt" />
                </a>
              </div>
              <h2 className="ps-banner__title">
                Your one and only <br />
                online pharmacy!
              </h2>
              <div className="ps-banner__btn-group">
                <div className="ps-banner__btn">
                      <img src="/img/banner1.png" alt="alt" />
                  Up to 5 users simultaneously
                </div>
                <div className="ps-banner__btn">
                      <img src="/img/banner1.png" alt="alt" />
                  Has HEALTH certificate
                </div>
              </div>
              <a className="ps-banner__shop bg-yellow" href="#">
                About
              </a>
            </div>
            <div className="ps-banner__thumnail">
              {/* <img
                className="ps-banner__round"
                src="/img/banner1.png"
                alt
              /> */}
              <img
                className="ps-banner__image"
                src="/img/banner1.png"
                alt
              />
            </div>
          </div>
        </div>
      </section>

      <div className="ps-promo">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="ps-promo__item">
              <img
                className="ps-promo__banner"
                src="/img/product23.jpg"
                alt="alt"
              />
              <div className="ps-promo__content">
                <h4 className="ps-promo__name">
                  Get rid <br />
                  of bacteria <br />
                  in your home
                </h4>
                <div className="ps-promo__sale text-primary">-7%</div>
                <a className="ps-promo__btn" href="category-grid.html">
                  Shop now
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="ps-promo__item">
              <img
                className="ps-promo__banner"
                src="/img/product24.jpg"
                alt="alt"
              />
              <div className="ps-promo__content">
                <span className="ps-promo__badge">New</span>
                <h4 className="mb-20 ps-promo__name">
                  SuperBrush <br />
                  X200 Higenic <br />
                  ProMaster
                </h4>
                <a className="ps-promo__btn" href="category-grid.html">
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="ps-promo__item">
              <img
                className="ps-promo__banner"
                src="/img/product25.jpg"
                alt="alt"
              />
              <div className="ps-promo__content">
                <h4 className="text-white ps-promo__name">
                  Hubble <br />
                  Eye <br />
                  Lenses
                </h4>
                <div className="ps-promo__sale text-yellow">-12%</div>
                <a className="ps-promo__btn" href="category-grid.html">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOG CAROUSEL */}
    </div>
  )
}

export default BestDeals