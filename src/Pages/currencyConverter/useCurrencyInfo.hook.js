import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  const apiURI = "https://api.exchangerate-api.com/v4/latest/";

  useEffect(() => {
    fetch(`${apiURI}${currency}`)
      .then((res) => res.json())
      .then((data) => setCurrencyInfo(data.rates));
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;
