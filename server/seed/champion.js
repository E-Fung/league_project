const axios = require('axios');
const Champion = require('../models/champion');

const championsURL = 'http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json';

const populateChampions = async () => {
  console.log('Populating');
  let tempChampListRaw = await axios.get(championsURL);
  let tempChampArray = Object.keys(tempChampListRaw.data.data).map((key) => tempChampListRaw.data.data[key]);

  tempChampArray.forEach(async (champion) => {
    try {
      let champ = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.2.1/data/en_US/champion/${champion.name}.json`);
      await populateChamp(champ.data.data[champion.name]);
    } catch {
      (err) => console.log(err);
    }
  });
};

const populateChamp = async (data) => {
  return axios.post('http://localhost:5000/champion', data);
};

module.exports = populateChampions;
