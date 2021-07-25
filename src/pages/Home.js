import React, { useState, useEffect } from "react";
import Fetch from "../components/Fetch";

const Home = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    async function fetchit() {
      setData(await Fetch());
    }

    fetchit();
  }, []);

  const isValidURL = (url) => {
    var urlPattern =
      "(((([a-zA-Z0-9.-]+\\.){1,}[a-zA-Z]{2,4}|localhost))|((\\d{1,3}\\.){3}(\\d{1,3})))(:(\\d+))?(/([a-zA-Z0-9-._~!$&'()*+,;=:@/]|%[0-9A-F]{2})*)?(\\?([a-zA-Z0-9-._~!$&'()*+,;=:/?@]|%[0-9A-F]{2})*)?(#([a-zA-Z0-9._-]|%[0-9A-F]{2})*)?";

    urlPattern = "^" + urlPattern + "$";
    var regex = new RegExp(urlPattern);

    return regex.test(url);
  };

  return (
    <div>
      <h6>IP: {data["ip"]}</h6>
      <h6>
        Address: {data["city"]}, {data["region"]}, {data["postal"]},{" "}
        {data["country_name"]}
      </h6>
      <h6>
        ISP:{" "}
        {isValidURL(data["ipName"])
          ? React.createElement(
              "a",
              { href: data["ipName"], target: "_blank", rel: "noreferrer" },
              data["ipName"]
            )
          : data["ipName"]}
      </h6>
      <h6>ISP_Type: {data["ipType"]}</h6>
      <h6>ISP_ASN: {data["org"]}</h6>
      <h6>
        ISP_CODE:{" "}
        {React.createElement(
          "a",
          {
            href: "https://ipinfo.io/" + data["asn"],
            target: "_blank",
            rel: "noreferrer",
          },
          data["asn"]
        )}
      </h6>
      <h6>
        LOCATION:{" "}
        {React.createElement(
          "a",
          {
            href:
              "https://www.google.com/maps/search/" +
              data["latitude"] +
              "," +
              data["longitude"],
            target: "_blank",
            rel: "noreferrer",
          },
          "GOOGLE MAPS"
        )}
      </h6>
      <h6>LOC_LAT: {data["latitude"]}</h6>
      <h6>LOC_LON: {data["longitude"]}</h6>
      <h6>TIMEZONE: {data["timezone"]}</h6>
      <h6>UTC_OFFSET: {data["utc_offset"]}</h6>
    </div>
  );
};

export default Home;
