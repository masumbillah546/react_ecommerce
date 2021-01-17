import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {AppContext} from '../Context';

class Header extends Component {
	static contextType = AppContext;
    // static propTypes = {
    //     classNameName: PropTypes.string,
    // };

    // constructor(props) {
    //     super(props);
    //     console.log(props.cart)
    // }
    // state={
    // 	cart:0,
    // 	wishlist:0,
    // }
    componentDidMount(){
       
    	
		  const script = document.createElement("script");
		  script.src = "/electro/js/bootstrap.min.js";
		  script.async = true;
		  // script.onload = () => this.scriptLoaded();

		  document.body.appendChild(script);
		        

    }

    render() {

        return (
            <div>
        {/* HEADER */}
		<header>
			{/* TOP HEADER */}
			<div id="top-header">
				<div className="container">
					<ul className="header-links pull-left">
						<li><a href="#"><i className="fa fa-phone"></i> +021-95-51-84</a></li>
						<li><a href="#"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
						<li><a href="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
					</ul>
					<ul className="header-links pull-right">
						<li><a href="#"><i className="fa fa-dollar"></i> USD</a></li>
						<li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
					</ul>
				</div>
			</div>
			{/*TOP HEADER */}

			{/* MAIN HEADER */}
			<div id="header">
				{/* container */}
				<div className="container">
					{/* row */}
					<div className="row">
						{/* LOGO */}
						<div className="col-md-3">
							<div className="header-logo">
								<Link to="/" className="logo">
									<img src="electro/img/logo.png" alt="" />
								</Link>
							</div>
						</div>
						{/*LOGO */}

						{/* SEARCH BAR */}
						<div className="col-md-6">
							<div className="header-search">
								<form>
									<select className="input-select">
										<option value="0">All Categories</option>
										<option value="1">Category 01</option>
										<option value="1">Category 02</option>
									</select>
									<input className="input" placeholder="Search here" />
									<button className="search-btn">Search</button>
								</form>
							</div>
						</div>
						{/*SEARCH BAR */}

						{/* ACCOUNT */}
						<div className="col-md-3 clearfix">
							<div className="header-ctn">
								{/* Wishlist */}
								<div>
									<a href="#">
										<i className="fa fa-heart-o"></i>
										<span>Your Wishlist</span>
										<div className="qty">{this.context.wishlist}</div>
									</a>
								</div>
								{/*Wishlist */}

								{/* Cart */}
								<div className="dropdown">
									<Link to="cart">
										<i className="fa fa-shopping-cart"></i>
										<span>Your Cart</span>
										<div className="qty">{this.context.cart}</div>
									</Link>
									<div className="cart-dropdown">
										<div className="cart-list">
											<div className="product-widget">
												<div className="product-img">
													<img src="electro/img/product01.png" alt="" />
												</div>
												<div className="product-body">
													<h3 className="product-name"><a href="#">product name goes here</a></h3>
													<h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
												</div>
												<button className="delete"><i className="fa fa-close"></i></button>
											</div>

											<div className="product-widget">
												<div className="product-img">
													<img src="electro/img/product02.png" alt="" />
												</div>
												<div className="product-body">
													<h3 className="product-name"><a href="#">product name goes here</a></h3>
													<h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
												</div>
												<button className="delete"><i className="fa fa-close"></i></button>
											</div>
										</div>
										<div className="cart-summary">
											<small>3 Item(s) selected</small>
											<h5>SUBTOTAL: $2940.00</h5>
										</div>
										<div className="cart-btns">
											<a href="#">View Cart</a>
											<a href="#">Checkout  <i className="fa fa-arrow-circle-right"></i></a>
										</div>
									</div>
								</div>
								{/*Cart */}

								{/* Menu Toogle */}
								<div className="menu-toggle">
									<a href="#">
										<i className="fa fa-bars"></i>
										<span>Menu</span>
									</a>
								</div>
								{/*Menu Toogle */}
							</div>
						</div>
						{/*ACCOUNT */}
					</div>
					{/* row */}
				</div>
				{/* container */}
			</div>
			{/*MAIN HEADER */}
		</header>
		{/*HEADER */}

		{/* NAVIGATION */}
		<nav id="navigation">
			{/* container */}
			<div className="container">
				{/* responsive-nav */}
				<div id="responsive-nav">
					{/* NAV */}
					<ul className="main-nav nav navbar-nav">
						<li className="active"><Link to="/">Home</Link></li>
						<li><Link to="store">Store</Link></li>
						<li><Link to="product">Product</Link></li>
						<li><Link to="checkout">Checkout</Link></li>
						<li><Link to="#">Categories</Link></li>
						<li><Link to="cart">Cart</Link></li>
						<li><Link to="#">Smartphones</Link></li>
						<li><Link to="#">Cameras</Link></li>
						<li><Link to="#">Accessories</Link></li>
					</ul>
					{/*NAV */}
				</div>
				{/*responsive-nav */}
			</div>
			{/*container */}
		</nav>
		{/*NAVIGATION */}

		
		</div>
        );
    }
}

export default Header;
