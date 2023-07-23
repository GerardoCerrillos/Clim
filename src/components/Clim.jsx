import "./clim.css";

const Clim = ({ lon, lat, temp, weather, checked ,description }) => {

  return (
    <>
      <div className="container">
        <div className="weather-data">
          <h1>{temp?.celsius}</h1>
          <ul className="weather-list">
            <li>Wind {weather?.wind.speed} km/s</li>
            <li>Humidity {weather?.main.humidity}</li>
            <li>Pressure {weather?.main.pressure}</li>
          </ul>
        </div>
        <div className="weather-img-container">
          <img className="weather-img" src="/cloudy-day.png" alt="" />
        </div>
        <div className="weather-info">
          <div className="weather-city">
            <h2>{weather?.name}</h2>
          </div>
          <div className="weather-description">
            <p>{weather?.weather[0].description}</p>
          </div>
        </div>
      </div>
      <div className={checked ? 'container-bg-white' : 'container-bg-dark'}></div>
    </>
  );
};
export default Clim;
