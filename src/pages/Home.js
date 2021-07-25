import React, { useState, useEffect } from "react";
import Fetch from "../components/Fetch";

const Home = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    async function fetchit() {
      // var raw = await Fetch();
      setData(await Fetch());
      // console.log(raw);
    }

    fetchit();
  }, []);

  return (
    <div>
      <h6>IP: {data["query"]}</h6>
      <h6>
        Address: {data["city"]}, {data["regionName"]}, {data["zip"]},{" "}
        {data["country"]}
      </h6>
      <h6>ISP: {data["isp"]}</h6>
      <h6>ISP_AS: {data["as"]}</h6>
      <h6>
        ISP_CODE:{" "}
        <a
          href={"https://ipinfo.io/" + data["asCode"]}
          target="_blank"
          rel="noreferrer"
        >
          {data["asCode"]}
        </a>
      </h6>
      <h6>ISP_AS_NAME: {data["asname"]}</h6>
      <h6>LOC_LAT: {data["lat"]}</h6>
      <h6>LOC_LON: {data["lon"]}</h6>
      <h6>OFFSET: {data["offset"]}</h6>
      <h6>TIMEZONE: {data["timezone"]}</h6>
    </div>
  );
};

export default Home;
