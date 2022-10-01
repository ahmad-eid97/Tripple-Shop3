import { NavbarHome5, HeaderHome5, LatestProductsHome5, TakeCareProductsHome5 } from '../../components';

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from "../../store/store";

const Home5 = () => {
  return (
    <>
      <div className="ps-page ps-layout">

          {/* NAVBAR SECTION */}
          <NavbarHome5 />

          <div className="ps-home ps-home--5">

              {/* HEADER SECTION */}
              <HeaderHome5 />

              <div className="ps-home__content">
                  <div className="container">
                      <div className="ps-promo">
                          <div className="row">
                              <div className="col-12 col-md-6">
                                  <div className="ps-promo__item"><img className="ps-promo__banner" src="img/promotion/bg-banner13.jpg" alt="alt" />
                                      <div className="ps-promo__content">
                                          <h4 className="mb-20 text-white ps-promo__name">Antibacterial <br/>Medical Mask</h4>
                                          <div className="ps-promo__icon"> <img src="img/icon5.png" alt="Anti-Bacterial" /><span>Anti-Bacterial</span></div><a className="btn-warning ps-promo__btn" href="category-grid.html">Add to cart</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6">
                                  <div className="ps-promo__item"><img className="ps-promo__banner" src="img/promotion/bg-banner14.jpg" alt="alt" />
                                      <div className="ps-promo__content">
                                          <h4 className="text-white ps-promo__name">PowerSteel <br/>X-tra 200 Brush</h4>
                                          <div className="ps-promo__meta">
                                              <p className="ps-promo__price">$119.00</p>
                                              <p className="ps-promo__del">$129.00</p>
                                          </div><a className="btn-yellow ps-promo__btn" href="category-grid.html">Shop now</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* POPULAT CATEGORIES SECTION */}
                      <section className="ps-section--category ps-category--image">
                          <h3 className="ps-section__title">Check out the most popular categories</h3>
                          <div className="ps-section__content">
                              <div className="row">
                                  <div className="col-6 col-md-4">
                                      <div className="ps-category__thumbnail"> <a className="ps-category__image" href="category-grid.html"><img src="img/promotion/facemask-cat.png" alt /></a>
                                          <div className="ps-category__content"><a className="ps-category__name" href="category-grid.html">Face masks</a><a className="ps-category__more" href="category-grid.html">More</a></div>
                                      </div>
                                  </div>
                                  <div className="col-6 col-md-4">
                                      <div className="ps-category__thumbnail"> <a className="ps-category__image" href="category-grid.html"><img src="img/promotion/uniforms-cat.png" alt /></a>
                                          <div className="ps-category__content"><a className="ps-category__name" href="category-grid.html">Uniforms</a><a className="ps-category__more" href="category-grid.html">More</a></div>
                                      </div>
                                  </div>
                                  <div className="col-6 col-md-4">
                                      <div className="ps-category__thumbnail"> <a className="ps-category__image" href="category-grid.html"><img src="img/promotion/protectcover-cat.png" alt /></a>
                                          <div className="ps-category__content"><a className="ps-category__name" href="category-grid.html">Protective covers</a><a className="ps-category__more" href="category-grid.html">More</a></div>
                                      </div>
                                  </div>
                                  <div className="col-6 col-md-4">
                                      <div className="ps-category__thumbnail"> <a className="ps-category__image" href="category-grid.html"><img src="img/promotion/dental-cat.png" alt /></a>
                                          <div className="ps-category__content"><a className="ps-category__name" href="category-grid.html">Dental</a><a className="ps-category__more" href="category-grid.html">More</a></div>
                                      </div>
                                  </div>
                                  <div className="col-6 col-md-4">
                                      <div className="ps-category__thumbnail"> <a className="ps-category__image" href="category-grid.html"><img src="img/promotion/pressure-cat.png" alt /></a>
                                          <div className="ps-category__content"><a className="ps-category__name" href="category-grid.html">Blood pressure</a><a className="ps-category__more" href="category-grid.html">More</a></div>
                                      </div>
                                  </div>
                                  <div className="col-6 col-md-4">
                                      <div className="ps-category__thumbnail"> <a className="ps-category__image" href="category-grid.html"><img src="img/promotion/sugarlevel-cat.png" alt /></a>
                                          <div className="ps-category__content"><a className="ps-category__name" href="category-grid.html">Sugar level</a><a className="ps-category__more" href="category-grid.html">More</a></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>

                  {/* LATEST PRODUCTS SECTION */}
                  <LatestProductsHome5 />

                  <div className="container">

                      {/* TAKE CARE SECTION */}
                      <TakeCareProductsHome5 />

                      <div className="ps-delivery" data-background="img/promotion/banner-delivery-2.jpg">
                          <div className="ps-delivery__content">
                              <div className="ps-delivery__text"> <i className="icon-shield-check"></i><span> <strong>100% Secure delivery </strong>without contacting the courier</span></div><a className="ps-delivery__more" href="#">More</a>
                          </div>
                      </div>

                      {/* BLOOD PRODUCTS SECTION */}
                      <div className="ps-home--block">
                          <div className="row">
                              <div className="col-12 col-md-8">
                                  <div className="ps-block__product">
                                      <div className="row m-0">
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/001.jpg" alt="alt" /><img src="img/products/009.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                          <div className="ps-badge ps-badge--sold">Sold Out</div>
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Digital Thermometer X30-Pro</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price sale">$77.65</span><span className="ps-product__del">$80.65</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/003.jpg" alt="alt" /><img src="img/products/008.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                          <div className="ps-badge ps-badge--sale">Sale</div>
                                                          <div className="ps-badge ps-badge--hot">Hot</div>
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Automatic blood pressure monitor</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price sale">$90.65</span><span className="ps-product__del">$60.65</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/008.jpg" alt="alt" /><img src="img/products/003.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Home Blood Pressure Monitors</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price sale">$90.65</span><span className="ps-product__del">$60.65</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/009.jpg" alt="alt" /><img src="img/products/001.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Blood Pressure Monitor with Stroke Risk Detection</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price sale">$77.65</span><span className="ps-product__del">$80.65</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/028.jpg" alt="alt" /><img src="img/products/045.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                          <div className="ps-badge ps-badge--sold">Sold Out</div>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/049.jpg" alt="alt" /><img src="img/products/048.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                          <div className="ps-badge ps-badge--sale">Sale</div>
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Technical Classicpod Micro Stethoscope Case</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price">$38.24 - $60.39</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-12 col-md-4">
                                  <div className="ps-block__image">
                                      <section className="ps-home__banner">
                                          <div className="ps-banner" style={{ background:'#FFCC00' }}><img className="ps-banner__overlay" src="img/promotion/blood-pressure.jpg" alt="alt" />
                                              <div className="ps-banner__block">
                                                  <div className="ps-banner__content">
                                                      <h2 className="ps-banner__title">Best blood <br/>pressure <br/>monitors</h2><a className="bg-yellow ps-banner__shop" href="#">Blood pressure</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </section>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="ps-footer--top">
                          <div className="container">
                              <div className="row m-0">
                                  <div className="col-12 col-sm-4 p-0">
                                      <p className="text-center"><a className="ps-footer__link" href="#"><i className="icon-wallet"></i>100% Money back</a></p>
                                  </div>
                                  <div className="col-12 col-sm-4 p-0">
                                      <p className="text-center"><a className="ps-footer__link" href="#"><i className="icon-bag2"></i>Non-contact shipping</a></p>
                                  </div>
                                  <div className="col-12 col-sm-4 p-0">
                                      <p className="text-center"><a className="ps-footer__link" href="#"><i className="icon-truck"></i>Free delivery for order over $200</a></p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* EQUIPMENT PRODUCTS SECTION */}
                      <div className="ps-home--block">
                          <div className="row">
                              <div className="col-12 col-md-4">
                                  <div className="ps-block__image">
                                      <section className="ps-home__banner">
                                          <div className="ps-banner" style={{ background:'#FFCC00' }}><img className="ps-banner__overlay" src="img/promotion/bg-banner-dental.jpg" alt="alt" />
                                              <div className="ps-banner__block">
                                                  <div className="ps-banner__content">
                                                      <h2 className="ps-banner__title text-white">Home and <br/>dental office <br/>equipment</h2>
                                                      <div className="ps-banner__price"> <span className="text-yellow">$25.99</span>
                                                          <del>$15.99</del>
                                                      </div><a className="bg-yellow ps-banner__shop" href="#">Dental</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </section>
                                  </div>
                              </div>
                              <div className="col-12 col-md-8">
                                  <div className="ps-block__product">
                                      <div className="row m-0">
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/054.jpg" alt="alt" /><img src="img/products/057.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                          <div className="ps-badge ps-badge--hot">Hot</div>
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Somersung Sonic X2000 Pro Black</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price">$299.99</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/053.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Somersung Sonic X500 Basic</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price sale">$38.39</span><span className="ps-product__del">$53.99</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/055.jpg" alt="alt" /><img src="img/products/056.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Somersung Sonic X2500 Pro White</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price">$39.99</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/042.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Extractor used to remove teeth</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price">$53.64</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/010.jpg" alt="alt" /><img src="img/products/011.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Hill-Rom P8000 Stretcher</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price">$511.64</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-6 col-lg-4 p-0">
                                              <div className="ps-product ps-product--standard">
                                                  <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                                          <figure><img src="img/products/013.jpg" alt="alt" /><img src="img/products/012.jpg" alt="alt" />
                                                          </figure>
                                                      </a>
                                                      <div className="ps-product__actions">
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="#" data-toggle="modal" data-target="#popupCompare"><i className="fa fa-align-left"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Quick view"><a href="#" data-toggle="modal" data-target="#popupQuickview"><i className="fa fa-search"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#" data-toggle="modal" data-target="#popupAddcart"><i className="fa fa-shopping-basket"></i></a></div>
                                                      </div>
                                                      <div className="ps-product__badge">
                                                      </div>
                                                  </div>
                                                  <div className="ps-product__content">
                                                      <h5 className="ps-product__title"><a href="product1.html">Hill-Rom VersaCare</a></h5>
                                                      <div className="ps-product__meta"><span className="ps-product__price">$136.87</span>
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
                                                                  <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                                  <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                                  <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                              </div>
                                                          </div>
                                                          <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                                          <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                                          <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
                                                          <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <section className="ps-banner--round">
                          <div className="ps-banner">
                              <div className="ps-banner__block">
                                  <div className="ps-banner__content">
                                      <div className="ps-logo"><a href="index.html"> <img src="img/logo.png" alt /></a></div>
                                      <h2 className="ps-banner__title">Your one and only <br />online pharmacy!</h2>
                                      <div className="ps-banner__btn-group">
                                          <div className="ps-banner__btn"><img src="img/icon2.png" alt />Up to 5 users simultaneously</div>
                                          <div className="ps-banner__btn"><img src="img/certificate-gray.png" alt />Has HEALTH certificate</div>
                                      </div><a className="ps-banner__shop bg-yellow" href="#">About</a>
                                  </div>
                                  <div className="ps-banner__thumnail"><img className="ps-banner__round" src="img/round5.png" alt /><img className="ps-banner__image" src="img/girl-face-mask.png" alt /></div>
                              </div>
                          </div>
                      </section>

                      {/* BLOG SECTION */}
                      <section className="ps-section--blog">
                          <h3 className="ps-section__title">From the blog</h3>
                          <div className="ps-section__carousel">
                              <div className="owl-carousel" data-owl-auto="false" data-owl-loop="true" data-owl-speed="13000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="true" data-owl-item="3" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="2" data-owl-item-lg="3" data-owl-item-xl="3" data-owl-duration="1000" data-owl-mousedrag="on">
                                  <div className="ps-section__item">
                                      <div className="ps-blog--latset">
                                          <div className="ps-blog__thumbnail"><a href="blog-post1.html"><img src="img/blog/blog2-496x262.jpg" alt="alt" /></a>
                                              <div className="ps-blog__badge"><span className="ps-badge__item">MEDIC</span><span className="ps-badge__item">PHARMACY</span><span className="ps-badge__item">SALE</span>
                                              </div>
                                          </div>
                                          <div className="ps-blog__content">
                                              <div className="ps-blog__meta"> <span className="ps-blog__date">May 18, 2021</span><a className="ps-blog__author" href="#">Alfredo Austin</a></div><a className="ps-blog__title" href="blog-post1.html">[PDF REPORT] – Impact of wearing masks on social behavior</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="ps-section__item">
                                      <div className="ps-blog--latset">
                                          <div className="ps-blog__thumbnail"><a href="blog-post1.html"><img src="img/blog/blog11-496x262.jpg" alt="alt" /></a>
                                              <div className="ps-blog__badge"><span className="ps-badge__item">MEDIC</span><span className="ps-badge__item">PHARMACY</span><span className="ps-badge__item">SALE</span>
                                              </div>
                                          </div>
                                          <div className="ps-blog__content">
                                              <div className="ps-blog__meta"> <span className="ps-blog__date">May 18, 2021</span><a className="ps-blog__author" href="#">Alfredo Austin</a></div><a className="ps-blog__title" href="blog-post1.html">The latest tests of popular masks in accordance with CV2s standards</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="ps-section__item">
                                      <div className="ps-blog--latset">
                                          <div className="ps-blog__thumbnail"><a href="blog-post1.html"><img src="img/blog/blog13-496x262.jpg" alt="alt" /></a>
                                              <div className="ps-blog__badge"><span className="ps-badge__item">MEDIC</span><span className="ps-badge__item">PHARMACY</span><span className="ps-badge__item">SALE</span>
                                              </div>
                                          </div>
                                          <div className="ps-blog__content">
                                              <div className="ps-blog__meta"> <span className="ps-blog__date">May 18, 2021</span><a className="ps-blog__author" href="#">Alfredo Austin</a></div><a className="ps-blog__title" href="blog-post1.html">The latest tests of popular masks in accordance with CV2s standards</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="ps-section__item">
                                      <div className="ps-blog--latset">
                                          <div className="ps-blog__thumbnail"><a href="blog-post1.html"><img src="img/blog/blog12-496x262.jpg" alt="alt" /></a>
                                              <div className="ps-blog__badge"><span className="ps-badge__item">MEDIC</span><span className="ps-badge__item">PHARMACY</span><span className="ps-badge__item">SALE</span>
                                              </div>
                                          </div>
                                          <div className="ps-blog__content">
                                              <div className="ps-blog__meta"> <span className="ps-blog__date">May 18, 2021</span><a className="ps-blog__author" href="#">Alfredo Austin</a></div><a className="ps-blog__title" href="blog-post1.html">New special offer for customers who have been with us for 10 years</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>

              </div>
          </div>

          {/* FOOTER SECTION */}
          <footer className="ps-footer ps-footer--5">
              <div className="ps-footer--top">
                  <div className="container">
                      <div className="row m-0">
                          <div className="col-12 col-sm-4 p-0">
                              <p className="text-center"><a className="ps-footer__link" href="#"><i className="icon-wallet"></i>100% Money back</a></p>
                          </div>
                          <div className="col-12 col-sm-4 p-0">
                              <p className="text-center"><a className="ps-footer__link" href="#"><i className="icon-bag2"></i>Non-contact shipping</a></p>
                          </div>
                          <div className="col-12 col-sm-4 p-0">
                              <p className="text-center"><a className="ps-footer__link" href="#"><i className="icon-truck"></i>Free delivery for order over $200</a></p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="ps-footer__middle">
                      <div className="row ps-footer__category m-0">
                          <div className="col-6 col-md-4 col-lg-2 p-0">
                              <div className="ps-footer--block">
                                  <h5 className="ps-block__title">Wound Care</h5>
                                  <ul className="ps-block__list">
                                      <li><a href="category-grid.html">Bandages</a></li>
                                      <li><a href="category-grid.html">Gypsum foundations</a></li>
                                      <li><a href="category-grid.html">Patches and tapes</a></li>
                                      <li><a href="category-grid.html">Stomatology</a></li>
                                      <li><a href="category-grid.html">Surgical sutures</a></li>
                                      <li><a href="category-grid.html">Uniforms</a></li>
                                      <li><a href="category-grid.html">Wound healing</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-6 col-md-4 col-lg-2 p-0">
                              <div className="ps-footer--block">
                                  <h5 className="ps-block__title">Higiene</h5>
                                  <ul className="ps-block__list">
                                      <li><a href="category-grid.html">Disposable products</a></li>
                                      <li><a href="category-grid.html">Face masks</a></li>
                                      <li><a href="category-grid.html">Gloves</a></li>
                                      <li><a href="category-grid.html">Protective covers</a></li>
                                      <li><a href="category-grid.html">Sterilization</a></li>
                                      <li><a href="category-grid.html">Surgical foils</a></li>
                                      <li><a href="category-grid.html">Uniforms</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-6 col-md-4 col-lg-2 p-0">
                              <div className="ps-footer--block">
                                  <h5 className="ps-block__title">Laboratory</h5>
                                  <ul className="ps-block__list">
                                      <li><a href="category-grid.html">Devices</a></li>
                                      <li><a href="category-grid.html">Diagnostic tests</a></li>
                                      <li><a href="category-grid.html">Disinfectants</a></li>
                                      <li><a href="category-grid.html">Dyes</a></li>
                                      <li><a href="category-grid.html">Pipettes</a></li>
                                      <li><a href="category-grid.html">Test-tubes</a></li>
                                      <li><a href="category-grid.html">Tubes</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-6 col-md-4 col-lg-2 p-0">
                              <div className="ps-footer--block">
                                  <h5 className="ps-block__title">Tools</h5>
                                  <ul className="ps-block__list">
                                      <li><a href="category-grid.html">Accessories Tools</a></li>
                                      <li><a href="category-grid.html">Blood pressure</a></li>
                                      <li><a href="category-grid.html">Capsules</a></li>
                                      <li><a href="category-grid.html">Dental</a></li>
                                      <li><a href="category-grid.html">Micrscope</a></li>
                                      <li><a href="category-grid.html">Pressure</a></li>
                                      <li><a href="category-grid.html">Sugar level</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-6 col-md-4 col-lg-2 p-0">
                              <div className="ps-footer--block">
                                  <h5 className="ps-block__title">Diagnosis</h5>
                                  <ul className="ps-block__list">
                                      <li><a href="category-grid.html">Biopsy tools</a></li>
                                      <li><a href="category-grid.html">Endoscopes</a></li>
                                      <li><a href="category-grid.html">Monitoring</a></li>
                                      <li><a href="category-grid.html">Otoscopes</a></li>
                                      <li><a href="category-grid.html">Oxygen concentrators</a></li>
                                      <li><a href="category-grid.html">Tables and assistants</a></li>
                                      <li><a href="category-grid.html">Thermometer</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-6 col-md-4 col-lg-2 p-0">
                              <div className="ps-footer--block p-0">
                                  <h5 className="ps-block__title">Equipment</h5>
                                  <ul className="ps-block__list">
                                      <li><a href="category-grid.html">Blades</a></li>
                                      <li><a href="category-grid.html">Education</a></li>
                                      <li><a href="category-grid.html">Germicidal lamps</a></li>
                                      <li><a href="category-grid.html">Heart Health</a></li>
                                      <li><a href="category-grid.html">Infusion stands</a></li>
                                      <li><a href="category-grid.html">Lighting</a></li>
                                      <li><a href="category-grid.html">Machines</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="row ps-footer__box">
                          <div className="col-12 col-md-4">
                              <div className="ps-footer--contact">
                                  <h5 className="ps-footer__title">Need help</h5>
                                  <div className="ps-footer__fax"><i className="icon-telephone"></i>0020 500 – MYMEDI – 000</div>
                                  <p className="ps-footer__work">Monday – Friday: 9:00-20:00<br />Saturday: 11:00 – 15:00</p>
                                  <hr />
                                  <p><a className="ps-footer__email" href="mailto:contact@example.com"> <i className="icon-envelope"></i>contact@example.com </a></p>
                              </div>
                          </div>
                          <div className="col-12 col-md-4">
                              <div className="ps-footer--address">
                                  <div className="ps-logo"><a href="index.html"> <img src="img/sticky-logo.png" alt /><img className="logo-white" src="img/logo-white.png" alt /><img className="logo-black" src="img/Logo-black.png" alt /><img className="logo-white-all" src="img/logo-white1.png" alt /><img className="logo-green" src="img/logo-green.png" alt /></a></div>
                                  <div className="ps-footer__title">Our store</div>
                                  <p>1487 Rocky Horse Carrefour<br />Arlington, TX 16819</p>
                                  <p><a href="https://www.google.com/maps/place/Arlington,+TX,+USA/@32.701968,-97.2054529,12z/data=!3m1!4b1!4m8!1m2!2m1!1s1487+Rocky+Horse+Carrefour+Arlington,+TX+16819!3m4!1s0x864e62d2e40898d3:0xb5ef6ac1fa05351!8m2!3d32.735687!4d-97.1080656">Show on map</a></p>
                                  <ul className="ps-social">
                                      <li><a className="ps-social__link facebook" href="#"><i className="fa fa-facebook"> </i><span className="ps-tooltip">Facebook</span></a></li>
                                      <li><a className="ps-social__link instagram" href="#"><i className="fa fa-instagram"></i><span className="ps-tooltip">Instagram</span></a></li>
                                      <li><a className="ps-social__link youtube" href="#"><i className="fa fa-youtube-play"></i><span className="ps-tooltip">Youtube</span></a></li>
                                      <li><a className="ps-social__link pinterest" href="#"><i className="fa fa-pinterest-p"></i><span className="ps-tooltip">Pinterest</span></a></li>
                                      <li><a className="ps-social__link linkedin" href="#"><i className="fa fa-linkedin"></i><span className="ps-tooltip">Linkedin</span></a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-12 col-md-4">
                              <div className="ps-footer--newsletter">
                                  <h5 className="ps-footer__title">Join our newsletter</h5>
                                  <p>And get $20 discount for your first order</p>
                                  <form action="do_action" method="post">
                                      <div className="ps-form--newsletter">
                                          <div className="input-group">
                                              <input className="form-control ps-input" type="text" placeholder="Enter your email address" />
                                              <button className="ps-btn ps-btn--warning">Subscribe </button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div className="ps-footer--listpage">
                          <div className="row">
                              <div className="col-4 col-md-2">
                                  <ul className="ps-footer__list">
                                      <li><a href="about-us.html">About us</a></li>
                                      <li><a href="#">Delivery information</a></li>
                                      <li><a href="#">Privacy Policy</a></li>
                                  </ul>
                              </div>
                              <div className="col-4 col-md-2">
                                  <ul className="ps-footer__list">
                                      <li><a href="#">Affiliate</a></li>
                                      <li><a href="#">Sales</a></li>
                                      <li><a href="#">Terms & Conditions</a></li>
                                  </ul>
                              </div>
                              <div className="col-4 col-md-2">
                                  <ul className="ps-footer__list">
                                      <li><a href="#">Bestsellers</a></li>
                                      <li><a href="#">Discount</a></li>
                                      <li><a href="#">Latest products</a></li>
                                  </ul>
                              </div>
                              <div className="col-4 col-md-2">
                                  <ul className="ps-footer__list">
                                      <li><a href="#">My account</a></li>
                                      <li><a href="#">My orders</a></li>
                                      <li><a href="#">Returns</a></li>
                                  </ul>
                              </div>
                              <div className="col-4 col-md-2">
                                  <ul className="ps-footer__list">
                                      <li><a href="#">Shipping</a></li>
                                      <li><a href="wishlist.html">Wishlist</a></li>
                                  </ul>
                              </div>
                              <div className="col-4 col-md-2"> </div>
                          </div>
                      </div>
                  </div>
                  <div className="ps-footer--bottom">
                      <div className="row">
                          <div className="col-12 col-md-6">
                              <p>Copyright © 2021 Mymedi. All Rights Reserved</p>
                          </div>
                          <div className="col-12 col-md-6 text-right"><img src="img/payment.png" alt /><img className="payment-light" src="img/payment-light.png" alt /></div>
                      </div>
                  </div>
              </div>
          </footer>
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
                                                      <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                      <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                      <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
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
                                              <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
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
                                                      <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                      <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                      <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                  </div>
                                              </div>
                                              <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                              <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                              <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
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
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
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
                                                    <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                    <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                    <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                </div>
                                            </div>
                                            <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                            <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
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
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
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
                                                    <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                    <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                    <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                </div>
                                            </div>
                                            <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                            <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
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
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa-regular fa-heart"></i></a></div>
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
                                                    <button className="minus" onClick="this.parentNode.querySelector('input[type=number]').stepDown()"><i className="icon-minus"></i></button>
                                                    <input className="quantity" min="0" name="quantity" value="1" type="number" />
                                                    <button className="plus" onClick="this.parentNode.querySelector('input[type=number]').stepUp()"><i className="icon-plus"></i></button>
                                                </div>
                                            </div>
                                            <div className="ps-product__cart"> <a className="ps-btn ps-btn--warning" href="#" data-toggle="modal" data-target="#popupAddcart">Add to cart</a></div>
                                            <div className="ps-product__item cart" data-toggle="tooltip" data-placement="left" title="Add to cart"><a href="#"><i className="fa fa-shopping-basket"></i></a></div>
                                            <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
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
    <div className="ps-preloader" id="preloader">
        <div className="ps-preloader-section ps-preloader-left"></div>
        <div className="ps-preloader-section ps-preloader-right"></div>
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

export default Home5;