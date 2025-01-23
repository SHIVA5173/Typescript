// Enums : a set of named constants.

enum Directions {
  "North",
  "East",
  "South",
  "West",
}

console.log(Directions.North);
console.log(Directions.East);
console.log(Directions.South);
console.log(Directions.West);

enum Rankings {
  "Shiva" = 4881,
  "Vijay",
  "Aravind",
  "Chandra Mohann",
}

console.log(Rankings.Shiva);
console.log(Rankings.Vijay);
console.log(Rankings.Aravind);
console.log(Rankings["Chandra Mohann"]);

enum WeatherConditions {
  "Sunny" = "Sunny",
  "Cloudy" = "Cloudy",
  "Rainy" = "Rainy",
  "Snowy" = "Snowy",
}

let currentWeather = WeatherConditions.Cloudy;
console.log(`The Current Weather Conditions Is ${currentWeather}!`);
