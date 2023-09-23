import React, {useState, useEffect} from "react";
import {dateBuilder} from "./utils"
import API from "./config";

function App() {
    // console.log({API})
    const [query, setQuery] = useState("Tel Aviv");
    const [weather, setWeather] = useState({});
    const [location, setLocation] = useState({});
    const [temp, setTemp] = useState(15)

    const searchLocation = evt => {

        if (evt.key === "Enter"){
            fetch(`${API.googleMapsBase}json?address=${query}&key=${API.googleMapsKey}`)
                .then( res => res.json() )
                .then( result => {
                    // console.log(result);
                    const newLocationObj = {
                        ...location,
                        lat : result?.results[0]?.geometry?.location?.lat,
                        lng : result?.results[0]?.geometry?.location?.lng,
                    }
                    setLocation(newLocationObj)
                })

        }


    }
    useEffect( () => {
        const searchWeather = (location) => {
            fetch(`${API.base_api_url}weather?lat=${location.lat}8&lon=${location.lng}&units=metric&appid=${API.key}`)

                .then( res => res.json() )
                .then( result => {
                    setWeather(result)
                    setTemp(parseInt(result?.main?.temp))
                })
        }
        searchWeather(location);
    },[location])

    console.log(temp)

    const setAppClass = (temp) => {
        let appClasses = "app";
        if (parseInt(temp) > 27){
            appClasses = "app warm"
        }
        return appClasses;
    }
  return (
    <div className={setAppClass(temp)}>
      <main>
        <div className="search-box">
          <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={searchLocation}
          />
        </div>
          {
              location ? (
                  <>
                      {
                          weather &&(
                              <>
                                  <div className="location-box">
                                      <div className="location">{`${weather.name}, ${weather?.sys?.country}`}</div>
                                      <div className="date">{dateBuilder(new Date())}</div>
                                  </div>
                                  <div className="weather-box">
                                      { temp && (
                                          <div className="temp">
                                              {`${parseInt(weather?.main?.temp)}`}&deg; C
                                          </div>
                                      )}
                                      {weather.weather && (
                                          <div className="weather">
                                              {`${weather?.weather[0].main}`}
                                          </div>
                                      )}
                                  </div>
                              </>
                          )
                      }
                  </>
              ) : (
                  <>
                      <div className="location-box">
                          <div className="location">Location not Found</div>
                          <div className="date">{dateBuilder(new Date())}</div>
                      </div>
                  </>
              )
          }

      </main>
    </div>
  );
}

export default App;
