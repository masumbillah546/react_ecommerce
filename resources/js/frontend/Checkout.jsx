import React, { Component, PropTypes } from 'react';

class Checkout extends Component {
    // static propTypes = {
    //     classNameName: PropTypes.string,
    // };

    // constructor(props) {
    //     super(props);
    // }
    

     state = {

        fname:"",
        lname:"",
        email:"",
        address:"",
        city:"",
        country:"",
        zip:"",
        tel:"",
        
    }

    handle=(e)=>{

    	this.setState({
                [e.target.name]:e.target.value,
              });

    }
    
    submithandle = (e) => {

             e.preventDefault();

              axios.post('/order',{
                order_number:"ORD335",
                // user_id:this.context.fname,
                sub_total:this.context.fname,
                // shipping_id:this.context.fname,
                coupon:this.context.fname,
                total_amount:this.context.fname,
                quantity:this.context.fname,
                payment_method:this.context.fname,
            
                first_name:this.state.fname,
                last_name:this.state.lname,
                email:this.state.email,
                phone:this.state.tel,
                country:this.state.country,
                post_code:this.state.zip,
                address1:this.state.address,
                // city:this.state.lname,
           
              })
              .then(function ({data}) {
                  alert("success");
              }.bind(this))
              .catch(function (error) {
              console.log(error);
              });

      
    }

    render() {
        return (

        	<div>
        				{/* BREADCRUMB */}
		<div id="breadcrumb" className="section">
			{/* container */}
			<div className="container">
				{/* row */}
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">Checkout</h3>
						<ul className="breadcrumb-tree">
							<li><a href="#">Home</a></li>
							<li className="active">Checkout</li>
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

						<form onSubmit={this.submithandle}>

					<div className="col-md-7">
						{/* Billing Details */}
						<div className="billing-details">
							<div className="section-title">
								<h3 className="title">Billing & Shiping address</h3>
							</div>

							


							<div className="form-group">
								<input onChange={this.handle} className="input" type="text" name="fname" placeholder="First Name" value={this.state.fname} />
							</div>
							<div className="form-group">
								<input onChange={this.handle} className="input" type="text" name="lname" placeholder="Last Name" value={this.state.lname} />
							</div>
							<div className="form-group">
								<input onChange={this.handle} className="input" type="email" name="email" placeholder="Email" value={this.state.email} />
							</div>
							<div className="form-group">
								<input onChange={this.handle} className="input" type="text" name="address" placeholder="Address" value={this.state.address} />
							</div>
							<div className="form-group">
								<input onChange={this.handle} className="input" type="text" name="city" placeholder="City" value={this.state.city} />
							</div>
							<div className="form-group">
								<input onChange={this.handle} className="input" type="text" name="country" placeholder="Country" value={this.state.country} />
							</div>
							<div className="form-group">
								<input onChange={this.handle} className="input" type="text" name="zip" placeholder="ZIP Code" value={this.state.zip} />
							</div>
							<div className="form-group">
								<input onChange={this.handle} className="input" type="tel" name="tel" placeholder="Telephone" value={this.state.tel} />
							</div>
							{/*create-account 
							<div className="form-group">
								<div className="input-checkbox">
									<input type="checkbox" id="create-account" value={this.state.fname} />
									<label for="create-account">
										<span></span>
										Create Account?
									</label>
									<div className="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										<input className="input" type="password" name="password" placeholder="Enter Your Password" value={this.state.fname} />
									</div>
								</div>
							</div>*/}
						</div>
						{/*Billing Details */}

						{/* Shiping Details */}
						{/*<div className="shiping-details">
							<div className="section-title">
								<h3 className="title">Shiping address</h3>
							</div>
							<div className="input-checkbox">
								<input type="checkbox" id="shiping-address" />
								<label for="shiping-address">
									<span></span>
									Ship to a diffrent address?
								</label>
								<div className="caption">
									<div className="form-group">
										<input className="input" type="text" name="first-name" placeholder="First Name" />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="last-name" placeholder="Last Name" />
									</div>
									<div className="form-group">
										<input className="input" type="email" name="email" placeholder="Email" />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="address" placeholder="Address" />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="city" placeholder="City" />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="country" placeholder="Country" />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="zip-code" placeholder="ZIP Code" />
									</div>
									<div className="form-group">
										<input className="input" type="tel" name="tel" placeholder="Telephone" />
									</div>
								</div>
							</div>
						</div>*/}
						{/*Shiping Details */}

						{/* Order notes 
						<div className="order-notes">
							<textarea className="input" placeholder="Order Notes"></textarea>
						</div>*/}
						{/*Order notes */}
					</div>

					{/* Order Details */}
					<div className="col-md-5 order-details">
						<div className="section-title text-center">
							<h3 className="title">Your Order</h3>
						</div>
						<div className="order-summary">
							<div className="order-col">
								<div><strong>PRODUCT</strong></div>
								<div><strong>TOTAL</strong></div>
							</div>
							<div className="order-products">
								<div className="order-col">
									<div>1x Product Name Goes Here</div>
									<div>$980.00</div>
								</div>
								<div className="order-col">
									<div>2x Product Name Goes Here</div>
									<div>$980.00</div>
								</div>
							</div>
							<div className="order-col">
								<div>Shiping</div>
								<div><strong>FREE</strong></div>
							</div>
							<div className="order-col">
								<div><strong>TOTAL</strong></div>
								<div><strong className="order-total">$2940.00</strong></div>
							</div>
						</div>
						<div className="payment-method">
							{/*<div className="input-radio">
								<input type="radio" name="payment" id="payment-1" />
								<label htmlFor="payment-1">
									<span></span>
									Direct Bank Transfer
								</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div className="input-radio">
								<input type="radio" name="payment" id="payment-2" />
								<label htmlFor="payment-2">
									<span></span>
									Cheque Payment
								</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>*/}
							<div className="input-radio">
								<input type="radio" name="payment" id="payment-3" />
								<label htmlFor="payment-3">
									<span></span>
									Cash on Delivary
								</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div className="input-checkbox">
							<input type="checkbox" id="terms" />
							<label htmlFor="terms">
								<span></span>
								I've read and accept the <a href="#">terms & conditions</a>
							</label>
						</div>
						<button type="submit"  className="primary-btn btn-block order-submit">Place order</button>
					</div>

					</form>
					{/*Order Details */}
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

export default Checkout;
