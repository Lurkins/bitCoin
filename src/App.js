import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Chart from './Chart.js';

let url = "https://api.coindesk.com/v1/bpi/currentprice.json"

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
      amount: '',
      selectedOption: '',
      currencySign: '',
      selectAlert: false,
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
        let symbol = String.fromCharCode(36);
        let currencyAmount = res.data.bpi.USD.rate_float;
        let money = currencyAmount.toFixed(2);
        this.setState({
          amount: money,
          currencySign: symbol,
          selectAlert: false,
        })
      } else if (this.state.selectedOption === 'gbp') {
          let symbol = String.fromCharCode(163);
          let currencyAmount = res.data.bpi.GBP.rate_float;
          let money = currencyAmount.toFixed(2);
          this.setState({
            amount: money,
            currencySign: symbol,
            selectAlert: false,
          })
      } else if (this.state.selectedOption === 'eur') {
          let symbol = String.fromCharCode(8364);
          let currencyAmount = res.data.bpi.EUR.rate_float;
          let money = currencyAmount.toFixed(2);
          this.setState({
            amount: money,
            currencySign: symbol,
            selectAlert: false,
          })
      } else {
        this.setState({
          selectAlert: true,
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
              <div className="col-12">
                <h2 className="text-center">Current price:</h2>
                <div className="App-amount text-success">
                  {this.state.currencySign}{this.state.amount}
                </div>
              </div>
          </div>
          <div className="row">
            <div className="col-12">
              {this.state.selectAlert ? <p className="text-center text-danger">Select your currency</p> : <p className="text-center">Select your currency</p>}
            </div>
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
                      <input 
                        onClick={this.getData} 
                        className="mt-4 btn btn-primary" 
                        type="submit" 
                        value="Get Price!" 
                      />
                  </div> 
              </form>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12">
              <p className="text-center"><a href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a></p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4 className="text-center">BitCoin price 2019 in USD</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <Chart />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
