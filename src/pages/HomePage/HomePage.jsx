import React from 'react'

const HomePage = () => {
  return (
    <div>
        <h2>Введите страницу</h2>
        <a href="/weather"><input type="button" value="Прогноз Погоды" /></a>
        <a href="/current"> <input type="button" value="Курс Волют" /></a>
    </div>
  )
}

export default HomePage