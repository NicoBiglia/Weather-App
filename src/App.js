import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';


export default function App() {
  const [cities, setCities] = useState([]); //const [state, setState] = useState; useState va a guardar todas las ciudades que vamos buscando para luego renderizarlas.
  function onSearch(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
    .then(r => r.json()) //Busca una respuesta en la API, cuando la tiene, la pasa a un json para que sea mas lindo de visualizar el codigo.
    .then((recurso) => { //A esa respuesta lo va a ejecutar el recurso
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }
  return (
    <div className="App">
      <Nav onSearch = {onSearch}/>
      <Cards onClose={onClose} cities = {cities}/>   
    </div>
  );

}
