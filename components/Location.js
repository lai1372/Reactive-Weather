import { WeatherCard } from "./WeatherCard";

export default function Location({ data, location, setLocation }) {
  function findLocation(area) {
    return area.city === location;
  }
  const foundLocation = data.find(findLocation);

  return !foundLocation ? (
    <p>No location found</p>
  ) : (
    <WeatherCard city={foundLocation} />
  );
}
