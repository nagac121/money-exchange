
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
import { useRef, useState } from "react";

export default function App() {
  const usdRef = useRef();
  const euroRef = useRef();
  const [usdValue, setUsdEx] = useState("");
  const [euroValue, setEuroEx] = useState("");

  const onUSDChange = () => {
    const usdEntered = usdRef.current.value;
    setUsdEx(usdEntered);
    const euroEx = usdEntered * 0.87;
    setEuroEx(euroEx);
  };
  const onEuroChange = () => {
    const euroEntered = euroRef.current.value;
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
          ref={usdRef}
          value={Boolean(usdValue) ? usdValue : ""}
          type="text"
        />
      </fieldset>
      <fieldset>
        <legend>Enter money in EURO:</legend>
        <input
          type="text"
          onChange={onEuroChange}
          ref={euroRef}
          value={Boolean(euroValue) ? euroValue : ""}
        />
      </fieldset>
    </div>
  );
}
