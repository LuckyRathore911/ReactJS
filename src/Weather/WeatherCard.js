import React from 'react'

const WeatherCard = ({weatherInfo}) => {
    const[weatherState,setWeatherState]=React.useState("");
    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
    }=weatherInfo;

    React.useEffect(()=>{
        if(weatherMood){
            switch(weatherMood){
                case "clouds":setWeatherState("wi-day-cloud");    break;
                case "Haze":setWeatherState("wi-fog");     break;
                case "Clear":setWeatherState("wi-day-sunny");     break;
                case "Mist":setWeatherState("wi-dust");     break;
                default:setWeatherState("wi-day-sunny");     break;
            }
        }
    },[weatherMood]);
    //seconds to time
    let sec=sunset;
    let time=new Date(sec*1000);
    let timeStr=`${time.getHours()}:${time.getMinutes()}`;
  return (
    <>
    <article className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'><span>{temp}</span></div>
            <div className='description'>
                <div className='weatherCondition'>{weatherMood}</div>
                <div className='place'>{name} {country}</div>
            </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>
        <div className='extra-temp'>

            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <i className={"wi wi-sunset"}></i>
                    <p className='extra-info-leftside'> {timeStr}<br/>Time</p>
                </div>
                <div className='two-sided-section'>
                    <i className={"wi wi-humidity"}></i>
                    <p className='extra-info-leftside'>{humidity}<br/>Humidity</p>
                </div>
            </div>

            <div className='weather-extra-info'>
                <div className='two-sided-section'>
                    <i className={"wi wi-day-rain"}></i>
                    <p className='extra-info-leftside'> {pressure} <br/>Pressure</p>
                </div>
                <div className='two-sided-section'>
                    <i className={"wi wi-strong-wind"}></i>
                    <p className='extra-info-leftside'> {speed} <br/>WindSpeed</p>
                </div>
            </div>
        </div>
    </article>
    </>
  )
}

export default WeatherCard;