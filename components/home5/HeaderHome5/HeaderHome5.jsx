import React from 'react'

const HeaderHome5 = () => {
  return (
    <section className="ps-section--banner">
        <div className="ps-section__overlay">
            <div className="ps-section__loading"></div>
        </div>
        <div className="owl-carousel" data-owl-auto="false" data-owl-loop="true" data-owl-speed="15000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="true" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
            <div className="ps-banner" style={{ background:'#F0F2F5' }}>
                <div className="container container-initial">
                    <div className="ps-banner__block">
                        <div className="ps-banner__content">
                            <h2 className="ps-banner__title">Fully equipped<br/> of ophthalmic <br/>rooms</h2>
                            <div className="ps-banner__desc">Only in this week. Don’t misss!</div>
                            <div className="ps-banner__btn-group">
                                <div className="ps-banner__btn"><img src="img/icon3.png" alt="alt" />Anti-Bacterial</div>
                                <div className="ps-banner__btn"><img src="img/icon4.png" alt="alt" />Anti-Virus</div>
                            </div><a className="bg-warning ps-banner__shop" href="#">Shop now</a>
                            <div className="ps-banner__persen bg-yellow ps-center">-30%</div>
                        </div>
                        <div className="ps-banner__thumnail"><img className="ps-banner__round" src="img/round5.png" alt="alt" /><img className="ps-banner__image" src="img/promotion/slide5.jpg" alt="alt" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-banner" style={{ background:'#FFCC00' }}>
                <div className="container container-initial">
                    <div className="ps-banner__block">
                        <div className="ps-banner__content">
                            <h2 className="ps-banner__title">Get rid of bacteria <br/>in your home</h2>
                            <div className="ps-banner__desc">Get rid of all bacteria!</div>
                            <div className="ps-banner__btn-group">
                                <div className="ps-banner__btn font-bold"><img src="img/icon3.png" alt="alt" />Anti-Bacterial</div>
                                <div className="ps-banner__btn font-bold"><img src="img/icon4.png" alt="alt" />Anti-Virus</div>
                            </div><a className="bg-white ps-banner__shop" href="#">Shop now</a>
                            <div className="ps-banner__persen bg-primary">-25%</div>
                        </div>
                        <div className="ps-banner__thumnail"><img className="ps-banner__round" src="img/round2.png" alt="alt" /><img className="ps-banner__image" src="img/promotion/slide4.png" alt="alt" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-banner" style={{ background:'#DAECFA' }}>
                <div className="container container-initial">
                    <div className="ps-banner__block">
                        <div className="ps-banner__content">
                            <h2 className="ps-banner__title">Candid <br/> Whitening Kit</h2>
                            <div className="ps-banner__desc">Only in this week. Don’t misss!</div>
                            <div className="ps-banner__price"> <span>$15.99</span>
                                <del>$29.99</del>
                            </div><a className="bg-warning ps-banner__shop" href="#">Shop now</a>
                            <div className="ps-banner__persen bg-warning ps-center">-30%</div>
                        </div>
                        <div className="ps-banner__thumnail"><img className="ps-banner__round" src="img/round2.png" alt="alt" /><img className="ps-banner__image" src="img/promotion/slide1.png" alt="alt" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeaderHome5