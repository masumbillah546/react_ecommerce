import React, { Component, PropTypes } from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import {AppContext} from './Context';
import Pagination from './Pagination';
import Aside from './LeftSideBar';

// import  './common/js/main.js';

    


class Store extends Component {
   static contextType = AppContext;   
      // constructor(){
      	state = {
        products:[],
        currentPage:1,
        postsPerPage:3,
        productsId:null,
    }
      // }
    

    
    fetchUsers = async  () => {
    
        // fetch('/product-grids')
        // .then(response => {
        //          response.json().then(function(data) {         
        //             this.setState({
        //                 products:data.products
        //             });

        //     }.bind(this));
        // });


        axios.get('/product-grids').then(response => {

                    this.setState({
                        products:response.data.products
                    });

            }); 


         
    }



    filterhandle = async  (e) => {

        axios.get('/product-grids').then(response => {

                    this.setState({
                        products:response.data.products
                    });
            });      
    }

    componentDidMount(){
        this.fetchUsers();

		  const script = document.createElement("script");
		  script.src = "/electro/js/main.js";
		  script.async = true;
		  // script.onload = () => this.scriptLoaded();

		  document.body.appendChild(script);
		        

    }


    // clickHandle(){
    // 	
    // }

    clickHandle=(id)=>{
    	 console.log(id)
    }


    render() {
    	 // Get current posts
		  const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
		  const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
		  const currentPosts = this.state.products.slice(indexOfFirstPost, indexOfLastPost);

		  // Change page
		  const paginate = pageNumber => this.setState({currentPage:pageNumber});     
  
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
					<Aside filter={this.filterhandle} />
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

							{currentPosts.map((product,i)=>(
								
								
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
											<button onClick={() => this.context.addtowish(product.id)} className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
											<button onClick={() => this.context.addtowish(product.id)} className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button onClick={() => this.context.addtocart(product.id, product.price)} className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>
							
							))}

							{/*product loop end */}

						
						</div>
						{/*store products */}

						{/* store bottom filter */}
						{/*
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
						*/}
						 <Pagination
					        postsPerPage={this.state.postsPerPage}
					        totalPosts={this.state.products.length}
					        paginate={paginate}
					        currentPage={this.state.currentPage}
					      />
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
