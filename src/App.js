import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  
  return (
    <div className="App">
      <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-5">BitCoin Price App</h1>
            </div>               
        </div>
    </div>  
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 d-flex justify-content-center">
                <form  action="/" method="get">
                    <div class="form-check form-check-inline text-center">
                        <input class="form-check-input" type="radio" name="currency" id="inlineRadio1" value="usd" checked/>
                        <label class="form-check-label" for="inlineRadio1">USD</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="currency" id="inlineRadio2" value="gbp"/>
                        <label class="form-check-label" for="inlineRadio2">GBP</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="currency" id="inlineRadio3" value="eur"/>
                        <label class="form-check-label" for="inlineRadio3">EUR</label>
                    </div>
                    <div class="d-flex justify-content-center mb-5">
                        <input class="mt-4 btn btn-primary" type="submit" value="Get Price!"/>
                    </div>
                </form>
            </div>
          </div>
          <p class="text-center"><a href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a></p>
        </div>
    </div>
  );
}

export default App;
