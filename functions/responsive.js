const responsiveFunction = (youtube, maps) =>{
    let breakpoint = window.matchMedia('(min-width: 1024px)'),
        $youtube = document.querySelector(youtube), 
        $maps = document.querySelector(maps);
    const responsive = (e) =>{
        if (e.matches) {
            $youtube.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/36DCuT1KxM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            $maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26963634.440306917!2d86.05396959850373!3d34.41508716680059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChina!5e0!3m2!1ses!2smx!4v1616879754840!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
        }else{
            $youtube.innerHTML = `<a href="https://www.youtube.com/watch?v=36DCuT1KxM4&ab_channel=bcdaeiou" target="_blank">Ver video</a>`
            $maps.innerHTML = `<a href="https://goo.gl/maps/RPNwkngoTpRgFg8M9" target="_blank">Ver mapa</a>`
        }
        }
        
    breakpoint.addEventListener('change', responsive);
    responsive(breakpoint);
}

export default responsiveFunction;