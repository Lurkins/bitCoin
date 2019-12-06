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
      selectedOption: '',
      currencySign: '',
		}
  }

  getData = (e) => {
    e.preventDefault();
    axios({
      url: url,
      method: 'GET'
    })
    .then((res) => {
      if (this.state.selectedOption === 'usd'){
        let symbol = res.data.bpi.USD.symbol;
        let currencyAmount = res.data.bpi.USD.rate_float;
        let money = currencyAmount.toFixed(2);
        this.setState({
          dollar: money,
          currencySign: symbol
        })
      }else if (this.state.selectedOption === 'gbp') {
          let symbol = res.data.bpi.GBP.symbol;
          let currencyAmount = res.data.bpi.GBP.rate_float;
          let money = currencyAmount.toFixed(2);
          this.setState({
            dollar: money,
            currencySign: symbol
          })
      } else if (this.state.selectedOption === 'eur') {
          let symbol = res.data.bpi.EUR.symbol;
          let currencyAmount = res.data.bpi.EUR.rate_float;
          let money = currencyAmount.toFixed(2);
          this.setState({
            dollar: money,
            currencySign: symbol
          })
      } else {
        this.setState({
          dollar: " ",
          currencySign: " ",
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.currentTarget.value
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
              <input 
                className="form-check-input" 
                type="radio" 
                name="currency" 
                id="inlineRadio1" 
                value="usd" 
                checked={this.state.selectedOption === 'usd'}
                onChange={this.handleOptionChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">USD</label>
          </div>
          <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" name="currency" 
                id="inlineRadio2" 
                value="gbp" 
                checked={this.state.selectedOption === 'gbp'} 
                onChange={this.handleOptionChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">GBP</label>
          </div>
          <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" name="currency" 
                id="inlineRadio3" 
                value="eur"
                checked={this.state.selectedOption === 'eur'} 
                onChange={this.handleOptionChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">EUR</label>
          </div>
          <div className="d-flex justify-content-center mb-5">
              <input onClick={this.getData} className="mt-4 btn btn-primary" type="submit" value="Get Price!" />
          </div>
          {this.state.currencySign}{this.state.dollar}{this.state.selectedOption}
      </form>
    </div>
    </div>
    </div>
    </div>
    

  );
}
}

export default App;
