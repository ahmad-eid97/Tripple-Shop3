import ProductBox from '../../ProductBox/ProductBox';

const FeaturedProductsHome4 = () => {
  return (
    <section className="ps-section--featured">
        <h3 className="ps-section__title">Featured products</h3>
        <div className="ps-section__content">
            <div className="row m-0">
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <ProductBox />
                </div>
            </div>
            <div className="ps-shop__more"><a href="#">Show all</a></div>
        </div>
    </section>
  )
}

export default FeaturedProductsHome4