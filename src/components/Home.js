import { useState } from "react";

const Home = () => {
  const [weather, setWeather] = useState({
    location: {
      name: "Raleigh",
      region: "North Carolina",
      country: "United States of America",
      lat: 35.77,
      lon: -78.64,
      tz_id: "America/New_York",
      localtime_epoch: 1684965406,
      localtime: "2023-05-24 17:56",
    },
    current: {
      last_updated_epoch: 1684964700,
      last_updated: "2023-05-24 17:45",
      temp_c: 25.6,
      temp_f: 78.1,
      is_day: 1,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003,
      },
      wind_mph: 8.1,
      wind_kph: 13.0,
      wind_degree: 30,
      wind_dir: "NNE",
      pressure_mb: 1015.0,
      pressure_in: 29.97,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 28,
      cloud: 75,
      feelslike_c: 25.1,
      feelslike_f: 77.1,
      vis_km: 16.0,
      vis_miles: 9.0,
      uv: 6.0,
      gust_mph: 10.5,
      gust_kph: 16.9,
    },
  });

  const [givenCity, setGivenCity] = useState("Raleigh");

  const getWeather = async () => {
    console.log("...");
    let data = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=dae274a5b50d4ef09ac213234231005&q=${givenCity}`
    );
    let convertedData = await data.json();
    console.log(convertedData);
    setWeather(convertedData);
  };

  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-6 m-auto">
          <div className="row">
            <div className="col-9">
              <input
                value={givenCity}
                onChange={(e) => setGivenCity(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter the name of city"
              />
            </div>
            <div className="col-3">
              <button onClick={getWeather} className="btn btn-primary w-100">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 m-auto  bg-secondary bg-opacity-25 py-4 rounded-3">
          <p>Feels_Like_F : {weather.current.feelslike_f}</p>
          <p>Humidity : {weather.current.humidity}</p>
          <p>Wind_Mph : {weather.current.wind_mph}</p>
          <p>Country : {weather.location.country}</p>
          <p>Region : {weather.location.region}</p>
          <p>Time : {weather.location.localtime}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
