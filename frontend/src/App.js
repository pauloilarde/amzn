import React from 'react';
import data from './data';
import Product from './components/Product';

function App() {
  return (
    <>
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">amazona</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">SignIn</a>
            </div>
        </header>
        <main>
            <div className="row center">
              {
                
                data.products.map(product => (
                  <Product key={product._id} product={product} ></Product>
                ))
              }
            </div>
        </main>
        <footer className="row center">
            &copy; All rights reserved
        </footer>
    </div>
    </>
  );
}

export default App;
