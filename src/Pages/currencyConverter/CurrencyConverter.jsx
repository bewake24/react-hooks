import React, { useState } from "react";
import useCurrencyInfo from "./useCurrencyInfo.hook";
import { Input } from "./Input.cc";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  console.log(options);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    // setAmount(convertedAmount);
    // setConvertedAmount(amount);
    setAmount(0);
    setConvertedAmount(0);
  };

  return (
    <div className="bg-slate-800 w-full h-screen mx-auto">
      <h1 className="text-center text-6xl font-bold text-white">
        Currency Converter
      </h1>

      <div className="w-[500px] bg-slate-200/20 rounded border border-slate-100/50 mx-auto my-32 p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <Input
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
          />
          <div className="w-full flex justify-center items-center h-[10px]">
            <button
              onClick={swap}
              className="bg-blue-500 text-white mx-auto my-2 px-4 py-2 rounded border-2 border-white "
            >
              Swap
            </button>
          </div>
          <Input
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            amountDisabled
            selectedCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white mx-auto mt-4 px-4 py-2 rounded border-white w-full"
          >
            Convert from {from} to {to}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CurrencyConverter;
