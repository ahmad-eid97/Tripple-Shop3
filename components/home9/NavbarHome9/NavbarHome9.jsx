import React from 'react'

const NavbarHome9 = () => {
  return (
    <>
      <header className="ps-header ps-header--2 ps-header--9">
        <div className="ps-noti">
            <div className="container">
                <p className="m-0">Due to the <strong>COVID 19 </strong>epidemic, orders may be processed with a slight delay</p>
            </div><a className="ps-noti__close"><i className="icon-cross"></i></a>
        </div>
        <div className="ps-header__top">
            <div className="container">
                <div className="ps-header__text"> <strong>100% Secure delivery </strong>without contacting the courier </div>
                <div className="ps-top__right">
                    <div className="ps-language-currency"><a className="ps-dropdown-value" href="javascript:void(0);" data-toggle="modal" data-target="#popupLanguage">English <i className="fa-regular fa-chevron-down"></i></a><a className="ps-dropdown-value" href="javascript:void(0);" data-toggle="modal" data-target="#popupCurrency">USD <i className="fa-regular fa-chevron-down"></i></a></div>
                    <div className="ps-top__social">
                        <ul className="ps-social">
                            <li><a className="ps-social__link facebook" href="#"><i className="fa-brands fa-facebook-f"> </i><span className="ps-tooltip">Facebook</span></a></li>
                            <li><a className="ps-social__link instagram" href="#"><i className="fa-brands fa-instagram"></i><span className="ps-tooltip">Instagram</span></a></li>
                            <li><a className="ps-social__link youtube" href="#"><i className="fa-brands fa-youtube"></i><span className="ps-tooltip">Youtube</span></a></li>
                            <li><a className="ps-social__link pinterest" href="#"><i className="fa-brands fa-pinterest-p"></i><span className="ps-tooltip">Pinterest</span></a></li>
                            <li><a className="ps-social__link linkedin" href="#"><i className="fa-brands fa-linkedin-in"></i><span className="ps-tooltip">Linkedin</span></a></li>
                        </ul>
                    </div>
                    <ul className="menu-top">
                        <li className="nav-item"><a href="about-us.html">About</a></li>
                        <li className="nav-item"><a href="index.html">Order Tracking</a></li>
                        <li className="nav-item"><a href="blog-sidebar1.html">Blog</a></li>
                        <li className="nav-item"><a href="contact-us.html">Contact</a></li>
                    </ul>
                    <div className="ps-header__text">Need help? <strong>0020 500 - MYMEDI - 000</strong></div>
                </div>
            </div>
        </div>
        <div className="ps-header__middle">
            <div className="container">
                <div className="ps-logo"><a href="index.html"> <img src="img/logo.png" alt /><img className="sticky-logo" src="img/sticky-logo.png" alt /><img className="logo-white" src="img/logo-white.png" alt /></a></div><a className="ps-menu--sticky" href="#"><i className="fa fa-bars"></i></a>
                <div className="ps-header__right">
                    <ul className="ps-header__icons">
                        <li><a className="ps-header__item open-search" href="#"><i className="fa-regular fa-magnifying-glass"></i></a></li>
                        <li><a className="ps-header__item" href="#" id="login-modal"><i className="fa-regular fa-user"></i></a>
                            <div className="ps-login--modal">
                                <form method="get" action="do_action">
                                    <div className="form-group">
                                        <label>Username or Email Address</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" type="password" />
                                    </div>
                                    <div className="form-group form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label>Remember Me</label>
                                    </div>
                                    <button className="ps-btn ps-btn--warning" type="submit">Log In</button>
                                </form>
                            </div>
                        </li>
                        <li><a className="ps-header__item" href="wishlist.html"><i className="fa-regular fa-heart"></i><span className="badge">3</span></a></li>
                        <li><a className="ps-header__item" href="#" id="cart-mini"><i className="fa-regular fa-cart-shopping"></i><span className="badge">2</span></a>
                            <div className="ps-cart--mini">
                                <ul className="ps-cart__items">
                                    <li className="ps-cart__item">
                                        <div className="ps-product--mini-cart"><a className="ps-product__thumbnail" href="product-default.html"><img src="img/products/055.jpg" alt="alt" /></a>
                                            <div className="ps-product__content"><a className="ps-product__name" href="product-default.html">Somersung Sonic X2500 Pro White</a>
                                                <p className="ps-product__meta"> <span className="ps-product__price">$399.99</span></p>
                                            </div><a className="ps-product__remove" href="javascript: void(0)"><i className="icon-cross"></i></a>
                                        </div>
                                    </li>
                                    <li className="ps-cart__item">
                                        <div className="ps-product--mini-cart"><a className="ps-product__thumbnail" href="product-default.html"><img src="img/products/001.jpg" alt="alt" /></a>
                                            <div className="ps-product__content"><a className="ps-product__name" href="product-default.html">Digital Thermometer X30-Pro</a>
                                                <p className="ps-product__meta"> <span className="ps-product__sale">$77.65</span><span className="ps-product__is-price">$80.65</span></p>
                                            </div><a className="ps-product__remove" href="javascript: void(0)"><i className="icon-cross"></i></a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="ps-cart__total"><span>Subtotal </span><span>$399</span></div>
                                <div className="ps-cart__footer"><a className="ps-btn ps-btn--outline" href="shopping-cart.html">View Cart</a><a className="ps-btn ps-btn--warning" href="checkout.html">Checkout</a></div>
                            </div>
                        </li>
                    </ul>
                    <div className="ps-language-currency"><a className="ps-dropdown-value" href="javascript:void(0);" data-toggle="modal" data-target="#popupLanguage">English <i className="fa-regular fa-chevron-down"></i></a><a className="ps-dropdown-value" href="javascript:void(0);" data-toggle="modal" data-target="#popupCurrency">USD <i className="fa-regular fa-chevron-down"></i></a></div>
                    <div className="ps-header__menu">
                        <ul className="menu">
                            <li className="fa fa-bars has-mega-menu"><a href="#">Our Masks<span className="sub-toggle"><i className="fa fa-chevron-down"></i></span></a>
                                <div className="mega-menu">
                                    <div className="container">
                                        <div className="mega-menu__row">
                                            <div className="mega-menu__column">
                                                <h4>Category</h4>
                                                <ul className="sub-menu--mega">
                                                    <li><a href="promo-category.html">Promo Category</a></li>
                                                    <li><a href="category-grid.html">Grid</a></li>
                                                    <li><a href="category-grid-detail.html">Grid with details</a></li>
                                                    <li><a href="category-grid-green.html">Grid with header green</a></li>
                                                    <li><a href="category-grid-dark.html">Grid with header dark</a></li>
                                                    <li><a href="category-grid-separate.html">Grid separate</a></li>
                                                    <li><a href="category-list.html">List</a></li>
                                                    <li><a href="category-loading-infinity.html">Loading Infinity</a></li>
                                                    <li><a href="category-load-more.html">Load more button</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Pages</h4>
                                                <ul className="sub-menu--mega">
                                                    <li><a href="404.html">404</a></li>
                                                    <li><a href="about-us.html">About us</a></li>
                                                    <li><a href="contact-us.html">Contact us</a></li>
                                                    <li><a href="portfolio.html">Portfolio</a></li>
                                                    <li><a href="portfolio-detail.html">Porfolio Detail</a></li>
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                                    <li><a href="coming-soon.html">Coming soon</a></li>
                                                    <li><a href="product-result.html">Product Result</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Product</h4>
                                                <ul className="sub-menu--mega">
                                                    <li><a href="product1.html">Layout 01</a></li>
                                                    <li><a href="product2.html">Layout 02</a></li>
                                                    <li><a href="product3.html">Layout 03</a></li>
                                                    <li><a href="product4.html">Layout 04</a></li>
                                                    <li><a href="product5.html">Layout 05</a></li>
                                                    <li><a href="product6.html">Layout 06</a></li>
                                                    <li><a href="product7.html">Layout 07</a></li>
                                                    <li><a href="product-variable.html">Product variable</a></li>
                                                    <li><a href="product-sold-out.html">Product sold out</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Blog</h4>
                                                <ul className="sub-menu--mega">
                                                    <li><a href="blog-sidebar1.html">Blog sidebar 1</a></li>
                                                    <li><a href="blog-sidebar2.html">Blog sidebar 2</a></li>
                                                    <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                                    <li><a href="blog-post1.html">Blog post 1</a></li>
                                                    <li><a href="blog-post2.html">Blog post 2</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Home</h4>
                                                <ul className="sub-menu--mega">
                                                    <li><a href="index.html">Home 01</a></li>
                                                    <li><a href="home2.html">Home 02</a></li>
                                                    <li><a href="home3.html">Home 03</a></li>
                                                    <li><a href="home4.html">Home 04</a></li>
                                                    <li><a href="home5.html">Home 05</a></li>
                                                    <li><a href="home6.html">Home 06</a></li>
                                                    <li><a href="home7.html">Home 07</a></li>
                                                    <li><a href="home8.html">Home 08<span className="has-badge">New</span></a></li>
                                                    <li><a href="home9.html">Home 09<span className="has-badge">New</span></a></li>
                                                    <li><a href="home10.html">Home 10<span className="has-badge">New</span></a></li>
                                                    <li><a href="home11.html">Home 11<span className="has-badge">New</span></a></li>
                                                    <li><a href="home12.html">Home 12<span className="has-badge">New</span></a></li>
                                                    <li><a href="home13.html">Home 13<span className="has-badge">New</span></a></li>
                                                    <li><a href="home14.html">Home 14<span className="has-badge">New</span></a></li>
                                                    <li><a href="home15.html">Home 15<span className="has-badge">New</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </header>
      <header className="ps-header ps-header--9 ps-header--mobile">
          <div className="ps-noti">
              <div className="container">
                  <p className="m-0">Due to the <strong>COVID 19 </strong>epidemic, orders may be processed with a slight delay</p>
              </div><a className="ps-noti__close"><i className="icon-cross"></i></a>
          </div>
          <div className="ps-header__middle">
              <div className="container">
                  <div className="ps-logo"><a href="index.html"> <img className="sticky-logo" src="img/sticky-logo.png" alt /><img className="logo-white" src="img/logo-white.png" alt /></a></div>
                  <div className="ps-header__right">
                      <ul className="ps-header__icons">
                          <li><a className="ps-header__item open-search" href="#"><i className="fa fa-search"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>
    </>
  )
}

export default NavbarHome9