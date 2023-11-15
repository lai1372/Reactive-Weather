import React from "react";
import { WeatherCard } from "./components/WeatherCard";
import Location from "./components/Location";
import cities from "./data";
import { useState } from "react";
import Form from "./components/Form";
// Import data and WeatherCard here

function App() {
  const [location, setLocation] = useState("Tokyo");
  const [citySearch, setCitySearch] = useState("");

  // return citySearch.length > 0 ? (
  //   <>
  //     <h1 className="title">REACTIVE WEATHER</h1>
  //     <h3 className="subtitle">Up to the minute weather news</h3>
  //     <Form
  //       location={location}
  //       setLocation={setLocation}
  //       setCitySearch={setCitySearch}
  //     />
  //     <Location data={cities} location={location} setLocation={setLocation} />
  //   </>
  // ) : (
  //   <>
  //     <h1 className="title">REACTIVE WEATHER</h1>
  //     <h3 className="subtitle">Up to the minute weather news</h3>
  //     <Form
  //       location={location}
  //       setLocation={setLocation}
  //       setCitySearch={setCitySearch}
  //     />
  //     <div className="app">
  //       {cities.map((city) => (
  //         <WeatherCard key={city.city} city={city} />
  //       ))}
  //     </div>
  //   </>
  // );
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form
        location={location}
        setLocation={setLocation}
        setCitySearch={setCitySearch}
      />

      {citySearch.length > 0 ? (
        <>
          <Location
            data={cities}
            location={location}
            setLocation={setLocation}
            setCitySearch={setCitySearch}
          />
        </>
      ) : (
        <div className="app">
          {cities.map((city) => (
            <WeatherCard key={city.city} city={city} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
