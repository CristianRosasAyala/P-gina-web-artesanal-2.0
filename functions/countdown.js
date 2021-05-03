

const countdown = (countdownText) =>{
let $countdownText = document.querySelector(countdownText);
const tiempoRestante = () =>{
    let relojActual = new Date().getTime(),
        relojFuturo = new Date('March 17, 2022 03:24:00').getTime(),
        diferencia = relojFuturo-relojActual;
    return{
        milisegundos: diferencia,
        segundos: diferencia/(1000),
        minutos: diferencia/(1000*60),
        horas: diferencia/(1000*60*60),
        dias: diferencia/(1000*60*60*24),
    }
}
setInterval(() => {
    let {milisegundos, segundos, minutos, horas, dias} = tiempoRestante();
    if(milisegundos>0){
        $countdownText.innerHTML = `Dias: ${Math.ceil(dias)} Horas: ${Math.ceil(horas)} Minutos: ${Math.ceil(minutos)} Segundos: ${Math.ceil(segundos)} Milisegundos: ${Math.ceil(milisegundos)}`;
    }else{
        $countdownText.innerHTML = '¡Feliz año nuevo!'
    }
}, 0);
tiempoRestante();
}

export default countdown;