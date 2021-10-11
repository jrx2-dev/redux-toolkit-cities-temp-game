import cities from "../assets/world-cities.json";

export const selectRandomCities = (): string[] => {
  var randomCities: string[] = [];
  for (var i = 0; i < 5; i++) {
    var randomCity =
      cities.cities[Math.floor(Math.random() * cities.cities.length)];
    randomCities.push(randomCity.name);
  }
  return randomCities;
};
