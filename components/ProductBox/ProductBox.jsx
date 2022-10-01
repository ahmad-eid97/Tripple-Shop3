import React from 'react'

const ProductBox = () => {
  return (
    <div className="ps-section__product">
        <div className="ps-product ps-product--standard">
            <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                    <figure><img src="img/products/001.jpg" alt="alt" /><img src="img/products/009.jpg" alt="alt" />
                    </figure>
                </a>
                <div className="ps-product__actions">
                    <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="#"><i className="fa fa-heart-o"></i></a></div>
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
                        <option value="5" selected="selected">5</option>
                    </select> */}
                    <span className="ps-product__review">( Reviews)</span>
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
  )
}

export default ProductBox;