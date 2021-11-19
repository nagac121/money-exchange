/*
Finish the application for money exchange.
 
We expect to see a user-friendly app with clean code and without bugs.
The application should be written on React.

Requirements:
User may enter the value in USD, input will be automatically converted in EUR.
User may enter the value in EUR, input will be automatically converted in USD.

For simplicity the exchange rate is constant:
1 USD = 0.87 EUR

Note. You can use Google if you need it.
*/
import { useState } from "react";

export default function App() {
  const [usdValue, setUsdEx] = useState("");
  const [euroValue, setEuroEx] = useState("");

  const onUSDChange = (event) => {
    const usdEntered = event.target.value;
    // console.log(usdEntered);
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
    <div>
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
