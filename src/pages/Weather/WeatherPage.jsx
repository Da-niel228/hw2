import React, { useState, useEffect } from 'react'

const WeatherPage = () => {
    const API_KEY = '317147e078c54d6c882102156230710'
    const [city,setCity] = useState('')
    const [weather, setWeather] = useState({})
    const [isActive, setIsActive] = useState(false)
    const [error, setError] = useState('')
    const getWeather = async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      const data = await response.json()
      console.log(data);
      try {
        if(response.status === 200){
  setWeather(data)
      setIsActive(true)
        }else if (response.status === 400) {
          setError('Город не найден')
          console.error('Город не найден')
          reset1()
        }else if (response.status === 404) {
          setError('Сервер недоступен')
          console.error('Сервер не доступен')
          reset1()
        }
         
      } catch (error) {
        
      }
    }

    const reset1 = () => {
      setWeather(null)
      setIsActive (false)
      setCity("")
    }

    const reset = () => {
        setWeather(null)
      setIsActive (false)
      setCity("")
      setError('')
      
      } 
    
     useEffect(() => {
        (async () => {
          try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Bishkek&aqi=no`)
            const data = await response.json()
            setWeather(data)
            setIsActive(true)
          } catch (e) {
            setError('Сервер недоступен или отключен')
            alert('Сервер недоступен или отключен')
          } finally {
          
          }
        })()
      }, []);
 
  return (
    <div className='conteiner'>

    <div className='inputs'>
        <input type="text" placeholder='Введите город' className='huinya' onChange={(e) => setCity(e.target.value)} value={city}/>
        <input className='input1' type="button" value="Узнать погоду" onClick={getWeather}/>
        <input className='input2' type="button" value="Сбросить"   onClick={reset}  />
    </div>
    <div className="weather">
          { <div className="error">
             <p>
              {error}
             </p>
          </div> }
        <div className='country'>
          {isActive ? 
          <div>{weather.location.country}
          </div> 
          : null}
        </div>
        <div className='temp'>
          {isActive ? 
            <div>
              {weather.current.temp_c} C
            </div>
          : null} 
        </div>
        <div className='wind'>
        {isActive ?  <div>Скорость ветра {weather.current.wind_kph} км\ч </div> : null} 
        </div>
        <div className='pressure'>
        {isActive ? <div>давление {weather.current.pressure_in}</div> : null}
        </div>
        </div>
    <a href="/"><input type="button" value="На Главную"/></a>
    </div>
    
  )
}

export default WeatherPage