import React, { Component, PropTypes } from 'react';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Store extends Component {
    // static propTypes = {
    //     classNameName: PropTypes.string,
    // };

    // constructor(props) {
    //     super(props);
    //     console.log(this.props.name);

        
    // }
    

    state = {
        products:[],
    }

    
    fetchUsers = async  () => {
    	// const res= await Axios.get('/product-grids');
    	// console.log(res);
        fetch('/product-grids')
        .then(response => {
        	// console.log(response);})
            response.json().then(function(data) {
             
            
                // if(data.success === 1){
                    this.setState({
                        products:data.products

                    });
                  
                // } 
                // else{
                //     //this.context.post_show(false);
                // }               
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }
    componentDidMount(){
        this.fetchUsers();

    }

    render() {
  
        	 console.log(this.state.products);
        return (
            <div>
            			{/* BREADCRUMB */}
		<div id="breadcrumb" className="section">
			{/* container */}
			<div className="container">
				{/* row */}
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="#">Home</a></li>
							<li><a href="#">All Categories</a></li>
							<li><a href="#">Accessories</a></li>
							<li className="active">Headphones (227,490 Results)</li>
						</ul>
					</div>
				</div>
				{/*row */}
			</div>
			{/*container */}
		</div>
		{/*BREADCRUMB */}

		{/* SECTION */}
		<div className="section">
			{/* container */}
			<div className="container">
				{/* row */}
				<div className="row">
					{/* ASIDE */}
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
									<input id="price-min" type="number" />
									<span className="qty-up">+</span>
									<span className="qty-down">-</span>
								</div>
								<span>-</span>
								<div className="input-number price-max">
									<input id="price-max" type="number" />
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
					{/*ASIDE */}

					{/* STORE */}
					<div id="store" className="col-md-9">
						{/* store top filter */}
						<div className="store-filter clearfix">
							<div className="store-sort">
								<label>
									Sort By:
									<select className="input-select">
										<option value="0">Popular</option>
										<option value="1">Position</option>
									</select>
								</label>

								<label>
									Show:
									<select className="input-select">
										<option value="0">20</option>
										<option value="1">50</option>
									</select>
								</label>
							</div>
							<ul className="store-grid">
								<li className="active"><i className="fa fa-th"></i></li>
								<li><a href="#"><i className="fa fa-th-list"></i></a></li>
							</ul>
						</div>
						{/*store top filter */}

						{/* store products */}
						<div className="row">

							{/* product loop start*/}

							{this.state.products.map((product,i)=>(
								
								
							<div className="col-md-4 col-xs-6" key={i}>
								<div className="product">
									<div className="product-img">
										<img src={product.photo} alt="" />
										<div className="product-label">
											<span className="sale">-30%</span>
											<span className="new">NEW</span>
										</div>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">{product.title}</a></h3>
										<h4 className="product-price">${product.price} <del className="product-old-price">$990.00</del></h4>
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
							</div>
							
							))}

							{/*product loop end */}

						
						</div>
						{/*store products */}

						{/* store bottom filter */}
						<div className="store-filter clearfix">
							<span className="store-qty">Showing 20-100 products</span>
							<ul className="store-pagination">
								<li className="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
							</ul>
						</div>
						{/*store bottom filter */}
					</div>
					{/*STORE */}
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

export default Store;
