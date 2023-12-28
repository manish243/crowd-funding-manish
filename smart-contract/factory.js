import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x7d346c106E5d6EC225b7cf1bC7f1b02759a8e1d2"
);

export default instance;
