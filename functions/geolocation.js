const geolocationFunction = (geolocation) =>{
    const $geoContainer = document.getElementById(geolocation);
    const ubicacion = (latitud, longitud, precision,  contenedor) => {
        contenedor.innerHTML = `<p>Latitud: ${latitud}</p><p>Longitud: ${longitud}</p><p>Precisión: ${precision} metros</p>
        <a href="https://www.google.com/maps/@${latitud},${longitud}z" target="_blank">Abrir en Google Maps</a>`
    }
    if (!navigator) {
        $geoContainer.innerHTML = "La versión de tu navegador no soporta Geolocalización... ";
    }else{
        
        navigator.geolocation.getCurrentPosition((position) => {
            ubicacion(position.coords.latitude, position.coords.longitude, position.coords.accuracy ,$geoContainer);
            
          }, (e)=> $geoContainer.innerHTML = 'Ocurrio un error: '+e.message);
    }
}

export default geolocationFunction;