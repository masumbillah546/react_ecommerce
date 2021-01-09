
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';
import Store from './Store';
import Product from './Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
    // static propTypes = {
    //     className: PropTypes.string,
    // };

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
        	<Router>
        		<Header />
	        		<Switch>
				          <Route exact path="/">
				            <Home />
				          </Route>
				          
				          <Route path="/store">
				            <Store />
				          </Route>
                  <Route path="/product">
                    <Product />
                  </Route>
			        </Switch>
        		<Footer />

        	</Router>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
