import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

let url = "https://api.coindesk.com/v1/bpi/currentprice.json"

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
      dollar: 0,
      currencySign: '',
		}
  }

 
  getData = (event) => {
    event.preventDefault();
    axios({
      url: url,
      method: 'get'
    })
    .then((res) => {
      let currencyAmount = res.data.bpi.USD.rate_float;
      let money = currencyAmount.toFixed(2);
      this.setState({dollar: money, currencySign: "$"})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="text-center my-5">BitCoin Price App</h1>
            </div>               
        </div>
    </div>  
    <div className="container">
    <div className="row">
    <div className="col-12 d-flex justify-content-center">
      <form>
          <div className="form-check form-check-inline text-center">
              <input className="form-check-input" type="radio" name="currency" id="inlineRadio1" value="usd" checked />
              <label className="form-check-label" for="inlineRadio1">USD</label>
          </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="currency" id="inlineRadio2" value="gbp" />
              <label className="form-check-label" for="inlineRadio2">GBP</label>
          </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="currency" id="inlineRadio3" value="eur" />
              <label className="form-check-label" for="inlineRadio3">EUR</label>
          </div>
          <div className="d-flex justify-content-center mb-5">
              <input onClick={this.getData} className="mt-4 btn btn-primary" type="submit" value="Get Price!" />
          </div>
          {this.state.currencySign}{this.state.dollar}
      </form>
    </div>
    </div>
    </div>
    </div>
    

  );
}
}

export default App;
