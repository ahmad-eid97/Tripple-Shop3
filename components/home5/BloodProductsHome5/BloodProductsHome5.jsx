import React from 'react'

const BloodProductsHome5 = () => {
  return (
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
  )
}

export default BloodProductsHome5