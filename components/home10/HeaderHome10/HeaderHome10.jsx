import React from 'react'

const HeaderHome10 = () => {
  return (
    <div className="ps-banner--full" style={{ backgroundImage: 'url("img/promotion/slide10.jpg")' }}>
        <section className="ps-banner">
            <div className="container">
                <div className="ps-banner__block">
                    <div className="ps-banner__content">
                        <h2 className="ps-banner__title">Best quality masks <br />for your daily life</h2>
                        <div className="ps-banner__desc">Now with special price -30%</div>
                        <div className="ps-banner__btn-group">
                            <div className="ps-banner__btn"><img src="img/icon5.png" alt />Anti-Bacterial</div>
                            <div className="ps-banner__btn"><img src="img/icon6.png" alt />Anti-Virus</div>
                        </div><a className="ps-banner__shop bg-warning" href="#">Select mask for you</a>
                    </div>
                    <div className="ps-banner__thumnail"></div>
                </div>
                <div className="ps-banner__group">
                    <div className="ps-banner__item"><img src="img/certificate-navy.png" alt="" />
                        <p>Health Certificate 2000 - <br />professional care</p>
                    </div>
                    <div className="ps-banner__item"><img src="img/bacteria-navy.png" alt="" />
                        <p>Anti-bacterial<br />protection </p>
                    </div>
                    <div className="ps-banner__item"><img src="img/virus-navy.png" alt="" />
                        <p>Anti-bacterial<br />protection </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeaderHome10