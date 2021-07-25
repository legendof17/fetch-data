import axios from "axios";

const Fetch = async () => {
  const raw = await axios.get("https://ipapi.co/json");
  const raw2 = await axios.get("https://extreme-ip-lookup.com/json");
  // const raw = await axios.get("./fakeresponse.json");
  Object.assign(raw["data"], {
    ipName: raw2["data"]["ipName"],
    ipType: raw2["data"]["ipType"],
    latitude: raw2["data"]["lat"],
    longitude: raw2["data"]["lon"],
  });
  console.log(raw["data"]);

  return raw["data"];
};

export default Fetch;
