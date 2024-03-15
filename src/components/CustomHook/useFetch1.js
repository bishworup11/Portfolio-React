import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    // const [flag, setFlag] = useState(null);
 
    const fetchQuote = async () => {
       // console.log(`Fetching data from ${url}`);
        const response = await fetch(url);
        const data = await response.json();
        setData(data[0]);
        //setFlag(true);
    };
    

    useEffect(() => {
        fetchQuote();
    },[url]);
 
    
    return {data,fetchQuote};
};

export default useFetch;