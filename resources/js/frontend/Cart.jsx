import React, { Component, PropTypes } from 'react';
import {AppContext} from './Context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Cart extends Component {
   static contextType = AppContext;   

    // static propTypes = {
    //     classNameName: PropTypes.string,
    // };

    // constructor(props) {
    //     super(props);
    // }

    state = {
        products:[],
        coupon:null,
        subtotal:0,
        quantity:1,
        tax :300,
        shipping:100,
        gtotal:0,
    }

    // fetchUsers = async  () => {

    //     axios.get('/product-grids').then(response => {

    //                 this.setState({
    //                     products:response.data.products
    //                 });

    //         });          
    // }



    cartList = () => {

      axios.get('/cart-list').then(response => {
              this.setState({
                
                products:response.data.cart,
                });  

            }); 
          // for(i=0;i<response.data.cart.length;i++){

          //     this.setState({

          //     })

          // }

        
    }

    //  handle=(e)=>{

    //     this.setState({
    //             [e.target.name]:e.target.value,
    //           });

    // }
   

    componentDidMount(){
        this.cartList();

       // this.fetchUsers();

          const script = document.createElement("script");
          script.src = "/electro/js/main.js";
          script.async = true;
          // script.onload = () => this.scriptLoaded();

          document.body.appendChild(script);
                

    }

    render() {
        return (

        	<div>
        		
        	{/* Breadcrumb Start */}
        <div class="breadcrumb-wrap">
            <div class="container-fluid">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?php echo base_url();?>">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Products</a></li>
                    <li class="breadcrumb-item active">Cart</li>
                </ul>
            </div>
        </div>
       {/* Breadcrumb End */}
        
       {/* Cart Start */}
        <div class="cart-page">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="cart-page-inner">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody class="align-middle">
                                           {this.state.products.map((list,i)=>(
                                        <tr key={i}>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img height = '50' src={list.photo} alt="Image" /></a>
                                                    
                                                </div>
                                            </td>
                                            <td>{list.title}</td>
                                            <td>{list.price}</td>
                                            <td>
                                                <div class="qty">
                                                   {/* <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                                    <input type="text" value="1">
                                                    <button class="btn-plus"><i class="fa fa-plus"></i></button> */}

                                                        <div className="input-number price-min">
                                                            <input    id="price-min" type="number" value={this.state.quantity} />
                                                            <span className="qty-up">+</span>
                                                            <span className="qty-down">-</span>
                                                        </div>
                                                        {/*<button class="btn-plus"><i class="fa fa-plus"></i></button>
                                                        <input class="text-center" type="text" name="qty"  autocomplete="off" value={list.quantity} / >
                                                        <input  type="hidden" name="rowid"  />
                                                        <button type="submit" class="btn-minus"><i class="fa fa-minus"></i></button>*/}
                                                       
                                                       {/* <input  type="submit"  value="Update"/> */}

                                                  


                                                </div>
                                            </td>
                                            <td><span>${list.price}</span></td>
                                            <td><a class="btn btn-danger" href=""><i class="fa fa-trash"></i></a></td>
                                        </tr>
                                        ))}

                                       {/* <?php } }else{ echo "<tr><td colspan='5'>There is no product in cart view</td></tr>"; } ?>*/}
                                  
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cart-page-inner">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="coupon">
                                        <input className="form-control" type="text" placeholder="Coupon Code" /><br/>
                                        <button className="btn btn-deafult">Apply Code</button>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="cart-summary">
                                        <div class="cart-content">
                                            <h1>Cart Summary</h1>

                                                     

                                  
                                     <p>Eco Tax 2%:  <span>${this.state.tax}</span></p>

                                        {/* Shipping Cost Dependend Quantity, price, buyer distance etc */}
                                       
                                            <p>Shipping Cost: <span>${this.state.shipping}</span></p>
                                           
                                            <h2>Grand Total <span>${this.state.gtotal}
                                         
                                    
                                            </span></h2>
                                        </div>
                                        <div class="cart-btn">
            
                                         
                                          
                                            <Link class="btn btn-warning check_out" to="checkout">Check Out</Link>
                                         	
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* Cart End */}

        	</div>
            
        );
    }
}

export default Cart;
