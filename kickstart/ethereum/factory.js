import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8C4e104aD348A0F16D831C929E8e1944e166cbF2'
);

export default instance;
