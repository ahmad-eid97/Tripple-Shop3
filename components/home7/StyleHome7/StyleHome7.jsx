import React from 'react'

const StyleHome7 = () => {
  return (
    <div className="container">
        <h3 className="ps-section__title">Choose your style</h3>
        <div className="ps-section__content">
            <div className="ps-section__product">
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
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                            <ul className="ps-product__list">
                                <li><i className="fa-duotone fa-check"></i> Study history up to 30 days</li>
                                <li><i className="fa-duotone fa-check"></i> Up to 5 users simultaneously</li>
                                <li><i className="fa-duotone fa-check"></i> Has HEALTH certificate</li>
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
            <div className="ps-section__product">
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
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                            <ul className="ps-product__list">
                                <li><i className="fa-duotone fa-check"></i> Study history up to 30 days</li>
                                <li><i className="fa-duotone fa-check"></i> Up to 5 users simultaneously</li>
                                <li><i className="fa-duotone fa-check"></i> Has HEALTH certificate</li>
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
            <div className="ps-section__product">
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
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                            <ul className="ps-product__list">
                                <li><i className="fa-duotone fa-check"></i> Study history up to 30 days</li>
                                <li><i className="fa-duotone fa-check"></i> Up to 5 users simultaneously</li>
                                <li><i className="fa-duotone fa-check"></i> Has HEALTH certificate</li>
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
  )
}

export default StyleHome7