
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import {Provider} from './Context';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';
import Store from './Store';
import Product from './Product';
import Checkout from './Checkout';
import Cart from './Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let count=0;
let count2=0;
class App extends Component {
    // static propTypes = {
    //     className: PropTypes.string,
    // };

    // constructor(props) {
    //     super(props);
    // }
    state = {

        wishlist:0,
        cart:0,
        pid:0,
        price:0,
        quantity:0,
        products:[],
    }
    
    addtocart = (id, price) => {

                count++; 
              this.setState({
                cart:count,
                pid:id,
                price:price,
                quantity:1,
                });

              axios.post('/add-to-cart',{
                  product_id:id,
                  price:price,
                  quantity:1
              })
              .then(function ({data}) {
                  // alert("success");
              }.bind(this))
              .catch(function (error) {
              console.log(error);
              });

      
    }

    
    // cartList = () => {

    //   axios.get('/cart-list').then(response => {
    //           this.setState({
                
    //             products:response.data.cart,
    //             });  

    //         }); 

        
    // }

     addtowish = (e) => {

      axios.get('/product-grids/{e}').then(response => {

              count2++; 
              this.setState({
                wishlist:count2,
                products:response.data.products,
                });  

            }); 

        
    }

    componentDidMount(){
       
      // this.cartList();
          const script = document.createElement("script");
          script.src = "/electro/js/main.js";
          script.async = true;
          // script.onload = () => this.scriptLoaded();

          document.body.appendChild(script);
                

    }

    render() {
      console.log(this.state.product)
      const contextValue = {
            wishlist:this.state.wishlist,
            cart:this.state.cart,
            addtocart:this.addtocart,
            addtowish:this.addtowish,
            // cartlist:this.state.products,
        }
        return (
          <Provider value={contextValue} >
        	<Router>
        		<Header />
	        		<Switch>
				          <Route exact path="/">
				            <Home />
				          </Route>
				          
				          <Route exact path="/store">
				            <Store  />
				          </Route>
                  <Route path="/product">
                    <Product />
                  </Route>
                   <Route path="/checkout">
                    <Checkout />
                  </Route>
                   <Route path="/cart">
                    <Cart />
                  </Route>
			        </Switch>
        		<Footer />

        	</Router>
          </Provider>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
