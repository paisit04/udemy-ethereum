import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x226a45976E36A4F2513Be80ECcc96bD85D0Be81a'
);

export default instance;
