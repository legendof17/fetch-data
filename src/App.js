import React, { useState, useEffect } from "react";
import "./App.css";
import Fetch from "./components/fetch";

function App() {
  const [ip, setIP] = useState(0);
  useEffect(() => {
    async function fetchit() {
      // var raw = await Fetch();
      setIP(await Fetch());
      // console.log(raw);
    }

    fetchit();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h6>{ip}</h6>
    </div>
  );
}

export default App;
