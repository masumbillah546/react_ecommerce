import React from 'react';
import ReactDOM from 'react-dom';
//import Home from './Home';

function App() {
    return <h1>Welcome</h1>
}

export default App;

if (document.getElementById('back')) {
    ReactDOM.render(<App />, document.getElementById('back'));
}
