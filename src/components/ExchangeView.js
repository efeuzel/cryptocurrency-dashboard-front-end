import React, { Component } from "react";
import CurrencyBox from "./CurrencyBox";
import { w3cwebsocket as W3CWebSocket } from "websocket";

export default class ExchangeView extends Component {
  constructor(props) {
    super(props);
    this.state = { price: 0 };
    this.messageHandler = this.messageHandler.bind(this);
  }

  messageHandler(e) {
    if (typeof e.data === "string") {
      console.log("Received: '" + e.data + "'");
      const response = JSON.parse(e.data);
      if (response[0] === 402) {
        this.setState({ price: response[1].LA });
      }
    }
  }

  componentDidMount() {
    console.log("ExchangeView component did mount");
    const client = W3CWebSocket("wss://ws-feed-pro.btcturk.com/ws");

    client.onerror = function () {
      console.log("Connection Error");
    };

    client.onopen = function () {
      console.log("WebSocket Client Connected");
      const subscribeMessage = [
        151,
        {
          type: 151,
          channel: "ticker",
          event: "ETHTRY",
          join: true,
        },
      ];
      client.send(JSON.stringify(subscribeMessage));
    };

    client.onclose = function () {
      console.log("WebSocket Client Closed");
    };

    client.onmessage = this.messageHandler;

    this.setState({ client: client });
  }

  componentWillUnmount() {
    this.state.client.close();
  }

  render() {
    return (
      <div className="card bg-light m-2 p-2">
        <div className="ml-2">{this.props.name}</div>
        <div className="d-flex justify-content-center">
          {Array.from(this.props.currencies).map((currency) => (
            <CurrencyBox
              key={currency}
              currency={currency}
              price={this.state.price}
            ></CurrencyBox>
          ))}
        </div>
      </div>
    );
  }
}
