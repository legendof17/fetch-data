import axios from "axios";

const Fetch = async () => {
  const raw = await axios.get(
    "http://demo.ip-api.com/json/?fields=66842623&lang=en"
    // "./fakeresponse.json"
  );
  const asCode = raw["data"]["as"].split(" ")[0];
  Object.assign(raw["data"], { asCode: asCode });
  // console.log(asCode);
  console.log(raw["data"]);

  return raw["data"];
};

export default Fetch;
