import React from 'react'

const PopularCategories = () => {
  return (
    <section className="ps-section--category-horizontal">
      <div className="container">
          <h3 className="ps-section__title">Popular categories</h3>
          <div className="ps-category__content">
              <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/plastercross.svg" alt /></a>
                  <div className="ps-category__name"><a href="category-grid.html">Bandages</a></div>
              </div>
              <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/capsule.svg" alt /></a>
                  <div className="ps-category__name"><a href="category-grid.html">Capsules</a></div>
              </div>
              <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/dental.svg" alt /></a>
                  <div className="ps-category__name"><a href="category-grid.html">Dental</a></div>
              </div>
              <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/thermometer.svg" alt /></a>
                  <div className="ps-category__name"><a href="category-grid.html">Thermometer</a></div>
              </div>
              <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/heart-healt.svg" alt /></a>
                  <div className="ps-category__name"><a href="category-grid.html">Heart Health</a></div>
              </div>
              <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/microscope.svg" alt /></a>
                  <div className="ps-category__name"><a href="category-grid.html">Micrscope</a></div>
              </div>
              <div className="ps-category__item"><a className="ps-category__link" href="category-grid.html"><img src="img/branch/tube.svg" alt /></a>
                  <div className="ps-category__name"><a href="category-grid.html">Tubes</a></div>
              </div>
          </div>
          <div className="ps-category__all"><a href="category-grid.html">Show all</a></div>
      </div>
    </section>
  )
}

export default PopularCategories