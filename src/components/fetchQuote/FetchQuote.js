import React, { useEffect, useState } from "react";
import useFetch1 from "../CustomHook/useFetch1";

export default function FetchData() {
  const { data, fetchQuote} = useFetch1("https://api.quotable.io/quotes/random");

  return (
    <div style={{ paddingTop: "70px", paddingLeft: "15%", paddingRight: "15%" }}id="Callback1">
      <h1> Fetch Data </h1>

      <div style={{ paddingTop: "70px", height:"100px" }}>
        {!data? (
          <h2 style={{ color: "red" }}>Loading</h2>
        ) : (
          <div>
            <h3>{data.content}</h3>
            <h2 style={{textAlign:"right",paddingRight:"50px"}}>{data.author}</h2>
            <h4 style={{textAlign:"right",paddingRight:"50px"}}>{data.dateAdded}</h4>
          </div>
        )}
      </div>
      <button onClick={fetchQuote} style={{ marginTop: "200px", width:"70px" }} ><b>click</b></button>
    </div>
  );
}
