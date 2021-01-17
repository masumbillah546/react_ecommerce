import React, { Component, PropTypes } from 'react';

class LeftSideBar extends Component {
    // static propTypes = {
    //     className: PropTypes.string,
    // };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="aside" className="col-md-3">
			{/* aside Widget */}
			<div className="aside">
				<h3 className="aside-title">Categories</h3>
				<div className="checkbox-filter">

					<div className="input-checkbox">
						<input type="checkbox" id="category-1" />
						<label htmlFor="category-1">
							<span></span>
							Laptops
							<small>(120)</small>
						</label>
					</div>

					<div className="input-checkbox">
						<input type="checkbox" id="category-2" />
						<label htmlFor="category-2">
							<span></span>
							Smartphones
							<small>(740)</small>
						</label>
					</div>

					<div className="input-checkbox">
						<input type="checkbox" id="category-3" />
						<label htmlFor="category-3">
							<span></span>
							Cameras
							<small>(1450)</small>
						</label>
					</div>

					<div className="input-checkbox">
						<input type="checkbox" id="category-4" />
						<label htmlFor="category-4">
							<span></span>
							Accessories
							<small>(578)</small>
						</label>
					</div>

					<div className="input-checkbox">
						<input type="checkbox" id="category-5" />
						<label htmlFor="category-5">
							<span></span>
							Laptops
							<small>(120)</small>
						</label>
					</div>

					<div className="input-checkbox">
						<input type="checkbox" id="category-6" />
						<label htmlFor="category-6">
							<span></span>
							Smartphones
							<small>(740)</small>
						</label>
					</div>
				</div>
			</div>
			{/*aside Widget */}

			{/* aside Widget */}
			<div className="aside">
				<h3 className="aside-title">Price</h3>
				<div className="price-filter">
					<div id="price-slider"></div>
					<div className="input-number price-min">
						<input onChange={()=>this.props.filterhandle()}  id="price-min" type="number" />
						<span className="qty-up">+</span>
						<span className="qty-down">-</span>
					</div>
					<span>-</span>
					<div className="input-number price-max">
						<input  id="price-max" type="number" />
						<span className="qty-up">+</span>
						<span className="qty-down">-</span>
					</div>
				</div>
			</div>
			{/*aside Widget */}

			{/* aside Widget */}
			<div className="aside">
				<h3 className="aside-title">Brand</h3>
				<div className="checkbox-filter">
					<div className="input-checkbox">
						<input type="checkbox" id="brand-1" />
						<label htmlFor="brand-1">
							<span></span>
							SAMSUNG
							<small>(578)</small>
						</label>
					</div>
					<div className="input-checkbox">
						<input type="checkbox" id="brand-2" />
						<label htmlFor="brand-2">
							<span></span>
							LG
							<small>(125)</small>
						</label>
					</div>
					<div className="input-checkbox">
						<input type="checkbox" id="brand-3" />
						<label htmlFor="brand-3">
							<span></span>
							SONY
							<small>(755)</small>
						</label>
					</div>
					<div className="input-checkbox">
						<input type="checkbox" id="brand-4" />
						<label htmlFor="brand-4">
							<span></span>
							SAMSUNG
							<small>(578)</small>
						</label>
					</div>
					<div className="input-checkbox">
						<input type="checkbox" id="brand-5" />
						<label htmlFor="brand-5">
							<span></span>
							LG
							<small>(125)</small>
						</label>
					</div>
					<div className="input-checkbox">
						<input type="checkbox" id="brand-6" />
						<label htmlFor="brand-6">
							<span></span>
							SONY
							<small>(755)</small>
						</label>
					</div>
				</div>
			</div>
			{/*aside Widget */}

			{/* aside Widget */}
			<div className="aside">
				<h3 className="aside-title">Top selling</h3>
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
			</div>
			{/*aside Widget */}
			</div>
        );
    }
}

export default LeftSideBar;
