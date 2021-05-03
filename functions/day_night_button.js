//Boton nocturno
/* let sol = '☀️', luna = '🌙';

document.addEventListener('click', e=>{
    if (e.target.matches('.boton-dianoche')) {
        
        
        if (e.target.innerText === luna ) {
            console.log('era una luna y cambie a sol');
            e.target.classList.add('noche-boton');
            document.body.classList.add('noche');
            e.target.innerHTML = sol;
            localStorage.setItem('nocturno', 'on');
        }else{
            console.log('era un sol y cambie a luna');
            e.target.classList.remove('noche-boton');
            document.body.classList.remove('noche');
            e.target.innerHTML = luna;
            localStorage.removeItem('nocturno', 'off');
        }
    }
});
if (localStorage.getItem('nocturno', 'on')) {
    document.body.classList.add('noche');
    $botonNocturno = document.querySelector('.boton-dianoche').innerHTML = sol;
    $botonNocturno = document.querySelector('.boton-dianoche').classList.add('noche');
}else{
    document.body.classList.remove('noche');
    $botonNocturno = document.querySelector('.boton-dianoche').innerHTML = luna;
    $botonNocturno = document.querySelector('.boton-dianoche').classList.remove('noche');
} */
const dayNightButton = (button) =>{
    let sun = '☀️', moon = '🌙';
    document.addEventListener('click', e =>{
        if(e.target.matches(button)){
            if (e.target.innerText === moon ) {
                e.target.classList.add('night-button');
                document.body.classList.add('night');
                e.target.innerHTML = sun;
                localStorage.setItem('nocturn', 'on');
                
            }else{
                e.target.classList.remove('night-button');
                document.body.classList.remove('night');
                e.target.innerHTML = moon;
                localStorage.removeItem('nocturn', 'off');
            }
        }
    });
    if (localStorage.getItem('nocturn', 'on')) {
        document.body.classList.add('night');
        document.querySelector(button).innerHTML = sun;
        document.querySelector(button).classList.add('night');
    }else{
        document.body.classList.remove('night');
        document.querySelector(button).innerHTML = moon;
        document.querySelector(button).classList.remove('night');
    } 
}
export default dayNightButton;