import React from "react";
import axios from "axios";

const Fetch = async () => {
  const raw = await axios.get(
    // "http://demo.ip-api.com/json/?fields=66842623&lang=en"
    "./fakeresponse.json"
  );
  console.log(raw["data"]);

  return raw["data"]["query"];
};

export default Fetch;
