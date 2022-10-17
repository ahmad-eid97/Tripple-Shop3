/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PopularCategories = () => {
  return (
    <section className="ps-section--categories">
      <h3 className="ps-section__title">Popular categories</h3>
      <div className="ps-section__content">
        <div className="ps-categories__list">
          <div className="ps-categories__item">
            <a
              className="ps-categories__link"
              href="category-grid.html"
            >
              <img src="/img/branch/plastercross.svg" alt />
            </a>
            <a
              className="ps-categories__name"
              href="category-grid.html"
            >
              Bandages
            </a>
          </div>
          <div className="ps-categories__item">
            <a
              className="ps-categories__link"
              href="category-grid.html"
            >
              <img src="/img/branch/capsule.svg" alt />
            </a>
            <a
              className="ps-categories__name"
              href="category-grid.html"
            >
              Capsules
            </a>
          </div>
          <div className="ps-categories__item">
            <a
              className="ps-categories__link"
              href="category-grid.html"
            >
              <img src="/img/branch/dental.svg" alt />
            </a>
            <a
              className="ps-categories__name"
              href="category-grid.html"
            >
              Dental
            </a>
          </div>
          <div className="ps-categories__item">
            <a
              className="ps-categories__link"
              href="category-grid.html"
            >
              <img src="/img/branch/thermometer.svg" alt />
            </a>
            <a
              className="ps-categories__name"
              href="category-grid.html"
            >
              Thermometer
            </a>
          </div>
          <div className="ps-categories__item">
            <a
              className="ps-categories__link"
              href="category-grid.html"
            >
              <img src="/img/branch/heart-healt.svg" alt />
            </a>
            <a
              className="ps-categories__name"
              href="category-grid.html"
            >
              Heart Health
            </a>
          </div>
          <div className="ps-categories__item">
            <a
              className="ps-categories__link"
              href="category-grid.html"
            >
              <img src="/img/branch/microscope.svg" alt />
            </a>
            <a
              className="ps-categories__name"
              href="category-grid.html"
            >
              Micrscope
            </a>
          </div>
          <div className="ps-categories__item">
            <a
              className="ps-categories__link"
              href="category-grid.html"
            >
              <img src="/img/branch/tube.svg" alt />
            </a>
            <a
              className="ps-categories__name"
              href="category-grid.html"
            >
              Tubes
            </a>
          </div>
        </div>
        <div className="text-center">
          {" "}
          <a
            className="ps-categories__show"
            href="category-grid.html"
          >
            Show all
          </a>
        </div>
      </div>
    </section>
  )
}

export default PopularCategories