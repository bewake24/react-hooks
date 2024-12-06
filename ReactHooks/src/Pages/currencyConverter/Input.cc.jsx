import React, { useId } from "react";

export const Input = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  const id = useId();
  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={id} className="block">
            {label}
          </label>
          <input
            type="number"
            id={id}
            placeholder="Amount"
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisabled}
            value={amount}
            className="border border-slate-400 outline-none rounded-lg bg-transparent p-1 mt-2"
          />
        </div>
        <div className="mr-0 ml-auto">
          <label htmlFor="currency-type" className="block">
            Currency Type
          </label>
          <select
            type="number"
            name="currency-type"
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisabled}
            className="border border-slate-400 outline-none rounded-lg bg-transparent p-1 mt-2 mr-0 ml-auto "
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency} className="text-[10px] ">
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
