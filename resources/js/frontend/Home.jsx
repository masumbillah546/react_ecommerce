import React, { Component, PropTypes } from 'react';

class Home extends Component {
    // static propTypes = {
    //     classNameName: PropTypes.string,
    // };

    constructor(props) {
        super(props);
   let url='electro';
   //console.log(url);
    }
    
    render() {
        return (
        <div>
        	{/* SECTION */}
        <div className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    {/* shop */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                            <div className="shop-img">
                                <img src="electro/img/shop01.png" alt="" />
                            </div>
                            <div className="shop-body">
                                <h3>Laptop<br/>Collection</h3>
                                <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/*shop */}

                    {/* shop */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                            <div className="shop-img">
                                <img src="electro/img/shop03.png" alt="" />
                            </div>
                            <div className="shop-body">
                                <h3>Accessories<br/>Collection</h3>
                                <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/*shop */}

                    {/* shop */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                            <div className="shop-img">
                                <img src="electro/img/shop02.png" alt="" />
                            </div>
                            <div className="shop-body">
                                <h3>Cameras<br/>Collection</h3>
                                <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/*shop */}
                </div>
                {/*row */}
            </div>
            {/*container */}
        </div>
        {/*SECTION */}

        {/* SECTION */}
        <div className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">

                    {/* section title */}
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title">New Products</h3>
                            <div className="section-nav">
                                <ul className="section-tab-nav tab-nav">
                                    <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                                    <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                                    <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                                    <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*section title */}

                    {/* Products tab & slick */}
                    <div className="col-md-12">
                        <div className="row">
                            <div className="products-tabs">
                                {/* tab */}
                                <div id="tab1" className="tab-pane active">
                                    <div className="products-slick" data-nav="#slick-nav-1">
                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product01.png" alt="" />
                                                <div className="product-label">
                                                    <span className="sale">-30%</span>
                                                    <span className="new">NEW</span>
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}

                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product02.png" alt="" />
                                                <div className="product-label">
                                                    <span className="new">NEW</span>
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}

                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product03.png" alt="" />
                                                <div className="product-label">
                                                    <span className="sale">-30%</span>
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}

                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product04.png" alt="" />
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}

                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product05.png" alt="" />
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}
                                    </div>
                                    <div id="slick-nav-1" className="products-slick-nav"></div>
                                </div>
                                {/*tab */}
                            </div>
                        </div>
                    </div>
                    {/* Products tab & slick */}
                </div>
                {/*row */}
            </div>
            {/*container */}
        </div>
        {/*SECTION */}

        {/* HOT DEAL SECTION */}
        <div id="hot-deal" className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="hot-deal">
                            <ul className="hot-deal-countdown">
                                <li>
                                    <div>
                                        <h3>02</h3>
                                        <span>Days</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3>10</h3>
                                        <span>Hours</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3>34</h3>
                                        <span>Mins</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3>60</h3>
                                        <span>Secs</span>
                                    </div>
                                </li>
                            </ul>
                            <h2 className="text-uppercase">hot deal this week</h2>
                            <p>New Collection Up to 50% OFF</p>
                            <a className="primary-btn cta-btn" href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                {/*row */}
            </div>
            {/*container */}
        </div>
        {/*HOT DEAL SECTION */}

        {/* SECTION */}
        <div className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">

                    {/* section title */}
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title">Top selling</h3>
                            <div className="section-nav">
                                <ul className="section-tab-nav tab-nav">
                                    <li className="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
                                    <li><a data-toggle="tab" href="#tab2">Smartphones</a></li>
                                    <li><a data-toggle="tab" href="#tab2">Cameras</a></li>
                                    <li><a data-toggle="tab" href="#tab2">Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*section title */}

                    {/* Products tab & slick */}
                    <div className="col-md-12">
                        <div className="row">
                            <div className="products-tabs">
                                {/* tab */}
                                <div id="tab2" className="tab-pane fade in active">
                                    <div className="products-slick" data-nav="#slick-nav-2">
                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product06.png" alt="" />
                                                <div className="product-label">
                                                    <span className="sale">-30%</span>
                                                    <span className="new">NEW</span>
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}

                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product07.png" alt="" />
                                                <div className="product-label">
                                                    <span className="new">NEW</span>
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}

                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product08.png" alt="" />
                                                <div className="product-label">
                                                    <span className="sale">-30%</span>
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}

                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product09.png" alt="" />
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}

                                        {/* product */}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="electro/img/product01.png" alt="" />
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                        {/*product */}
                                    </div>
                                    <div id="slick-nav-2" className="products-slick-nav"></div>
                                </div>
                                {/*tab */}
                            </div>
                        </div>
                    </div>
                    {/*Products tab & slick */}
                </div>
                {/*row */}
            </div>
            {/*container */}
        </div>
        {/*SECTION */}

        {/* SECTION */}
        <div className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-md-4 col-xs-6">
                        <div className="section-title">
                            <h4 className="title">Top selling</h4>
                            <div className="section-nav">
                                <div id="slick-nav-3" className="products-slick-nav"></div>
                            </div>
                        </div>

                        <div className="products-widget-slick" data-nav="#slick-nav-3">
                            <div>
                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product07.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product08.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product09.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/* product widget */}
                            </div>

                            <div>
                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product01.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product02.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product03.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/* product widget */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-6">
                        <div className="section-title">
                            <h4 className="title">Top selling</h4>
                            <div className="section-nav">
                                <div id="slick-nav-4" className="products-slick-nav"></div>
                            </div>
                        </div>

                        <div className="products-widget-slick" data-nav="#slick-nav-4">
                            <div>
                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product04.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product05.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product06.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/* product widget */}
                            </div>

                            <div>
                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product07.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product08.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product09.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/* product widget */}
                            </div>
                        </div>
                    </div>

                    <div className="clearfix visible-sm visible-xs"></div>

                    <div className="col-md-4 col-xs-6">
                        <div className="section-title">
                            <h4 className="title">Top selling</h4>
                            <div className="section-nav">
                                <div id="slick-nav-5" className="products-slick-nav"></div>
                            </div>
                        </div>

                        <div className="products-widget-slick" data-nav="#slick-nav-5">
                            <div>
                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product01.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product02.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product03.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/* product widget */}
                            </div>

                            <div>
                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product04.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product05.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/*product widget */}

                                {/* product widget */}
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="electro/img/product06.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                                {/* product widget */}
                            </div>
                        </div>
                    </div>

                </div>
                {/*row */}
            </div>
            {/*container */}
        </div>
        {/*SECTION */}

        </div>
        );
    }
}

export default Home;
