import React, { useState } from 'react';
import '../styles.css';
import CityInput from './CityInput';
import img1 from '../assests/weather_icons/50n.png';
import img2 from '../assests/weather_icons/Symbol.png';
import img5 from '../assests/weather_icons/humidity.png';
import img6 from '../assests/weather_icons/wind-night.png';
import img7 from '../assests/weather_icons/clouds.png';
import img8 from '../assests/weather_icons/uv.png';
import img9 from '../assests/weather_icons/pressure.png';
import img10 from '../assests/weather_icons/sunrise.png';
import img11 from '../assests/weather_icons/02d.png';
import img12 from '../assests/weather_icons/10d.png';
import img13 from '../assests/weather_icons/01d.png';
import axios from 'axios';
import Slider from './Slider';
import 'react-multi-carousel/lib/styles.css';
import { error, success } from '../utils/notifications';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37e0114790e02f6709d3e95afe5b02fc`
      );
      console.log('response', response);
      if (response?.status === 200) {
        success('Data fetch successfuly');
      }
      setWeatherData(response.data);
    } catch (err) {
      if (err?.response?.status === 404) {
        error('City Not Found');
        setWeatherData('');
      }
    }
  };

  //   Formula converting kalvin to celsius
  //   K − 273.15 = °C
  const temperature = Math.floor(weatherData?.main?.temp - 273.15);
  const maxTemperature = Math.floor(weatherData?.main?.temp_max - 273.15);
  const minTemperature = Math.floor(weatherData?.main?.temp_min - 273.15);
  const feelLike = Math.floor(weatherData?.main?.feels_like - 273.15);

  return (
    <div className=''>
      <div className='row mx-1'>
        <div className='col-md-3 search-portion d-flex justify-content-center '>
          <div className='mt-5 mb-5'>
            <CityInput onSearch={fetchWeatherData} />
            <div>
              <div className='mt-4'>
                <div className='ms-3'>
                  <img src={img1} alt='img icon' width={250} />
                </div>
              </div>
              <div className='below-img-div'>
                <p className='text-30'>
                  {temperature ? temperature : 0}
                  <sup className='degree'>°C</sup>
                </p>
                <p className='feel-like'>
                  Feels like {feelLike ? feelLike : 0} °C
                </p>
                <div className='d-flex text-light mist'>
                  <div>
                    <img src={img2} alt='iamge icon' width={55} />
                  </div>
                  <p className='ms-2 mt-2'>mist</p>
                </div>
                <p className='sunday'>
                  Sunday, <span className='time-color'>1:46 AM</span>
                </p>
                <p className='lahore'>
                  {weatherData ? weatherData?.name : 'City'},{' '}
                  {weatherData ? weatherData?.sys?.country : 'Country'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* weather portion  */}
        <div className='col-md-9 weather-portion'>
          {/* today  */}
          <div className='mt-5 mb-5'>
            <div className='text-light d-flex justify-content-between mx-4'>
              <p className='today'>Today</p>
              <p className='header-degree'>°C</p>
            </div>
            <Slider weatherData={weatherData} />
          </div>
          {/* today Highlights */}
          <div className='mt-3 mb-3'>
            <div className='text-light d-flex justify-content-between mx-4'>
              <p className='today'>Today's Highlights</p>
            </div>
            <div className='row mx-1'>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='card'>
                  <p className='w-sunday'>Humidity</p>
                  <img src={img5} alt='img icon' width={77} />
                  <p className='card-30'>
                    {weatherData ? weatherData?.main?.humidity : 0}
                    <span className='today-highlight-span'>%</span>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='card'>
                  <p className='w-sunday'>Wind Speed</p>
                  <img src={img6} alt='img icon' width={80} />
                  <p className='card-30'>
                    {weatherData ? weatherData?.wind?.speed : 0}
                    <span className='today-highlight-span'>m/s</span>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='card'>
                  <div>
                    <div className='d-flex'>
                      <div>
                        <img src={img10} alt='img icon' width={65} />
                      </div>
                      <p className='w-sunday-time ms-2 mt-3'>5:52 AM</p>
                    </div>
                    <p className='today-highlight-sunrise'>Sunrise</p>
                    <div className='d-flex'>
                      <div>
                        <img src={img10} alt='img icon' width={65} />
                      </div>
                      <p className='w-sunday-time ms-2 mt-3'>5:52 AM</p>
                    </div>
                    <p className='today-highlight-sunrise'>Sunrise</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='card'>
                  <p className='w-sunday'>Clouds</p>
                  <img src={img7} alt='img icon' width={95} />
                  <p className='card-30 mt-1'>
                    {weatherData ? weatherData?.clouds?.all : 0}
                    <span className='today-highlight-span'>%</span>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='card'>
                  <p className='w-sunday'>UV Index</p>
                  <img src={img8} alt='img icon' width={65} />
                  <p className='card-30 mt-1'>
                    0<span className='today-highlight-span'></span>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='card'>
                  <p className='w-sunday'>Pressure</p>
                  <img src={img9} alt='img icon' width={52} />
                  <p className='card-30 mt-2'>
                    {weatherData?.main?.pressure}
                    <span className='today-highlight-span'>hpa</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* This week  */}
          <div className='mt-3 mb-3'>
            <div className='text-light d-flex justify-content-between mx-4'>
              <p className='today'>This Week</p>
            </div>
            <div className='row mx-1'>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='week-card'>
                  <p className='w-sunday'>Sunday</p>
                  <img src={img11} alt='img icon' width={60} />
                  <p className='few-clouds'>few clouds</p>
                  <p className='week-card-30 '>
                    {maxTemperature ? maxTemperature : 0}°
                    <span className='today-highlight-span'>
                      {minTemperature ? minTemperature : 0}°
                    </span>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='week-card'>
                  <p className='w-sunday'>Monday</p>
                  <img src={img12} alt='img icon' width={60} />
                  <p className='few-clouds'>moderate rain</p>
                  <p className='week-card-30 '>
                    37°<span className='today-highlight-span'>28°</span>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='week-card'>
                  <p className='w-sunday'>Tuesday</p>
                  <img src={img12} alt='img icon' width={60} />
                  <p className='few-clouds'>moderate rain</p>
                  <p className='week-card-30 '>
                    29°<span className='today-highlight-span'>26°</span>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='week-card'>
                  <p className='w-sunday'>Thursday</p>
                  <img src={img13} alt='img icon' width={55} />
                  <p className='few-clouds'>clear sky</p>
                  <p className='week-card-30 '>
                    39°<span className='today-highlight-span'>30°</span>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='week-card'>
                  <p className='w-sunday'>Friday</p>
                  <img src={img12} alt='img icon' width={60} />
                  <p className='few-clouds'>light rain</p>
                  <p className='week-card-30 '>
                    38°<span className='today-highlight-span'>27°</span>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-6 mt-2 '>
                <div className='week-card'>
                  <p className='w-sunday'>Saturday</p>
                  <img src={img12} alt='img icon' width={60} />
                  <p className='few-clouds'>light rain</p>
                  <p className='week-card-30 '>
                    36°<span className='today-highlight-span'>26°</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
