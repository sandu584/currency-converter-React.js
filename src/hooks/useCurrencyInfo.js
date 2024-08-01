//Designing a custom Hook
import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => { return res.json() })
            .then((res) => setData(res[currency]))
    }, [currency]);
    console.log(data);
    return data;
};

export default useCurrencyInfo;