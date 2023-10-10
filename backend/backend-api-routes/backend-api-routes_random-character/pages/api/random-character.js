import Chance from "chance";

export default function handler(request, responce) {
  const chance = new Chance();

  const character = {
    name: chance.name(),
    age: chance.age(),
    lastName: chance.last(),
    gender: chance.gender(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };
  responce.status(200).json(character);
}
