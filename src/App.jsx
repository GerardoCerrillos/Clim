import "./App.css";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import Clim from "./components/Clim";
import axios from "axios";
import Button from "./components/Button";

function App() {
  // switch
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  // weather data

  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setCoords(obj);
    };

    // llamada a la api del navegador para obtener ubicacion
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  //? llamada a la api del clima

  useEffect(() => {
    if (coords) {
      const APIKEY = "58c46cddd658d854ede94ecbdf25ba56";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${APIKEY}`;
      axios
        .get(URL)
        .then((res) => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1);
          const farenheit = ((celsius * 9) / 5 + 32).toFixed(1);
          setTemp({ celsius, farenheit });
          setWeather(res.data);
          setDescription(res.data.weather[0].description);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  const update = (description) => {
    let value = "";
    switch (description) {
      case "scattered clouds":
      case "broken clouds":
        value = cloud;
        break;
      case "clear sky":
      case "few clouds":
        value = clear;
        break;
    }
    return value;
  };

  return (
    <div className={checked ? "lightmode" : "darkmode"}>
      <header className="header">
        <h1 className="h1">weather app</h1>
        <input type="text" placeholder="Busca una Ciudadd" />
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </header>
        <Clim lon={coords?.lon} lat={coords?.lat} temp={temp} weather={weather} description={description} checked={checked} />
        <Button temp={temp} checked={checked}/>
    </div>
  );
}

export default App;
