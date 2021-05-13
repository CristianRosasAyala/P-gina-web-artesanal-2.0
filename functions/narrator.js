const d = document;

const narrator = () =>{
    let options = d.querySelector('#narrators');
    const input = d.querySelector('#narrators-input'),
     inputText = d.querySelector('#text-area-narrator'),
     button = d.querySelector('#narrator-button');
    let voices = [];
    
    window.speechSynthesis.addEventListener('voiceschanged', e=>{
        //Guardando todas las voces disponibles en la lista
        voices = speechSynthesis.getVoices();
        voices.forEach(el =>{
            options.innerHTML += `<option value="${el.name}">`
        });

        //Asignando un evento al botón
        button.addEventListener('click', e=>{
            //comprobando si ambos tienen contenido y asignando nuevo narrador
            if(input.value && inputText.value){
                const utterThis = new SpeechSynthesisUtterance(inputText.value);
                //buscando la voz que se eligió anteriormente y asignándola
                let actualVoice = voices.find( el => el.name === input.value);
                utterThis.voice = actualVoice;
                //Ejecutando la función speak para hablar
                window.speechSynthesis.speak(utterThis);
            }else{
                alert('ingresa la información')
            }
        });
    });
   
    
    

}
export default  narrator;

 /* d.addEventListener('input', e=>{
        if(e.target === input){
            voice = e.target.value;
            console.log(voice)
        }
        if(e.target === inputText){
            text = e.target.value;
            console.log(text)
        }
        if(e.target === button){
            console.log('clik')
        }
        
    }); */