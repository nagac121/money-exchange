/*
Functionality:
User may enter the value in USD, input will be automatically converted in EUR.
User may enter the value in EUR, input will be automatically converted in USD.

For simplicity the exchange rate is constant:
1 USD = 0.87 EUR
*/
import { useState } from "react";

export default function App() {
  const [usdValue, setUsdEx] = useState("");
  const [euroValue, setEuroEx] = useState("");

  const onUSDChange = (event) => {
    const usdEntered = event.target.value;
    setUsdEx(usdEntered);
    const euroEx = usdEntered * 0.87;
    setEuroEx(euroEx);
  };
  const onEuroChange = (event) => {
    const euroEntered = event.target.value;
    setEuroEx(euroEntered);
    const usdEx = euroEntered / 0.87;
    setUsdEx(usdEx);
  };
  return (
    <div className="main">
      <h3>Exchange money:</h3>
      <fieldset>
        <legend>Enter money in USD:</legend>
        <input
          onChange={onUSDChange}
          value={Boolean(usdValue) ? usdValue : ""}
          type="text"
        />
      </fieldset>
      <fieldset>
        <legend>Enter money in EURO:</legend>
        <input
          type="text"
          onChange={onEuroChange}
          value={Boolean(euroValue) ? euroValue : ""}
        />
      </fieldset>
    </div>
  );
}
