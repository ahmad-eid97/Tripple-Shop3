import ProductBox from '../../ProductBox/ProductBox';

const LatestProductsHome3 = () => {
  return (
    <div className="ps-home__row">
        <div className="row">
            <div className="col-12 col-md-4 col-lg-3 ps-home__week-deal">
                <section className="ps-section--weekdeal">
                    <h3 className="ps-section__title">Popular categories</h3>
                    <div className="ps-section__content">
                        <div className="ps-weekdeal__product">
                            <div className="ps-countdown">
                                <div className="ps-countdown__content">
                                    <div className="ps-countdown__block ps-countdown__days">
                                        <div className="ps-countdown__number"><span className="first-1st">0</span><span className="first">0</span><span className="last">0</span></div>
                                        <div className="ps-countdown__ref">Days</div>
                                    </div>
                                    <div className="ps-countdown__block ps-countdown__hours">
                                        <div className="ps-countdown__number"><span className="first">0</span><span className="last">0</span></div>
                                        <div className="ps-countdown__ref">Hours</div>
                                    </div>
                                    <div className="ps-countdown__block ps-countdown__minutes">
                                        <div className="ps-countdown__number"><span className="first">0</span><span className="last">0</span></div>
                                        <div className="ps-countdown__ref">Mins</div>
                                    </div>
                                    <div className="ps-countdown__block ps-countdown__seconds">
                                        <div className="ps-countdown__number"><span className="first">0</span><span className="last">0</span></div>
                                        <div className="ps-countdown__ref">Secs </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail"><a className="ps-product__image" href="product1.html">
                                        <figure><img src="img/products/002.jpg" alt="alt" /><img src="img/products/017.jpg" alt="alt" />
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
                                    <div className="ps-product__percent">-30%</div>
                                </div>
                                <div className="ps-product__content">
                                    <h5 className="ps-product__title"><a href="product1.html">Blue Hot Water Bottle, 2 Quart Capacity</a></h5>
                                    <div className="ps-product__meta"><span className="ps-product__price sale">$38.39</span><span className="ps-product__del">$14.52 - $15.52</span>
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
                                    <div className="ps-product__footer">No of pcs available <span>10	</span></div>
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
                                        <div className="ps-product__item" data-toggle="tooltip" data-placement="left" title="Wishlist"><a href="wishlist.html"><i className="fa fa-heart-o"></i></a></div>
                                        <div className="ps-product__item rotate" data-toggle="tooltip" data-placement="left" title="Add to compare"><a href="compare.html"><i className="fa fa-align-left"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
                <section className="ps-section--latest-horizontal">
                    <h3 className="ps-section__title">Latest products</h3>
                    <div className="ps-section__content">
                        <div className="row m-0">
                            <div className="col-6 col-lg-3 p-0">
                                <ProductBox />
                            </div>
                            <div className="col-6 col-lg-3 p-0">
                                <ProductBox />
                            </div>
                            <div className="col-6 col-lg-3 p-0">
                                <ProductBox />
                            </div>
                            <div className="col-6 col-lg-3 p-0">
                                <ProductBox />
                            </div>
                            <div className="col-6 col-lg-3 p-0">
                                <ProductBox />
                            </div>
                            <div className="col-6 col-lg-3 p-0">
                                <ProductBox />
                            </div>
                            <div className="col-6 col-lg-3 p-0">
                                <ProductBox />
                            </div>
                            <div className="col-6 col-lg-3 p-0">
                                <ProductBox />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default LatestProductsHome3