import React, { Component } from "react";
import ExchangeView from "./components/ExchangeView";
import NavigationBar from "./components/NavigationBar";
import Options from "./components/Options";
import store from "./app/store";
import { Provider } from "react-redux";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeSet: new Set(),
      currencySet: new Set(),
    };
    this.handleExchangeSetChange = this.handleExchangeSetChange.bind(this);
    this.handleCurrencySetChange = this.handleCurrencySetChange.bind(this);
  }

  handleExchangeSetChange(exchangeSet) {
    this.setState({ exchangeSet: exchangeSet });
  }

  handleCurrencySetChange(currencySet) {
    this.setState({ currencySet: currencySet });
  }

  render() {
    const availableCurrencies = ["BTC/TRY", "BTC/ETH", "BTC/USDT"];
    const availableEchanges = ["Binance", "Bittrex", "BTCTurk"];
    return (
      <Provider store={store}>
        <div>
          <NavigationBar></NavigationBar>
          <div className="d-flex flex-row">
            <div>
              <div className="col-md-auto">
                <Options
                  options={availableEchanges}
                  optionGroupName={"Exchange Selection"}
                  raiseStateMethod={this.handleExchangeSetChange}
                ></Options>
              </div>
              <div className="col-md-auto">
                <Options
                  options={availableCurrencies}
                  optionGroupName={"Currency Selection"}
                  raiseStateMethod={this.handleCurrencySetChange}
                ></Options>
              </div>
            </div>

            <div className="col-md-auto">
              {Array.from(this.state.exchangeSet).map((exchange) => (
                <ExchangeView
                  key={exchange}
                  name={exchange}
                  currencies={this.state.currencySet}
                ></ExchangeView>
              ))}
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
