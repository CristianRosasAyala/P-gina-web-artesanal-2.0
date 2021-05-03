const digitalGiveaway = (dataContainer, inputGiveaway, addDataButton, giveawayButton) =>{
    const dataArray = [];
    document.addEventListener('click', e =>{
        if(e.target.matches(addDataButton) && inputGiveaway != null){
            document.querySelector(dataContainer).innerHTML = '';
            dataArray.push(document.querySelector(inputGiveaway).value);
            document.querySelector(inputGiveaway).value = '';
            
            dataArray.map(el => document.querySelector(dataContainer).innerHTML += `<li>${el}</li>`);
            console.log(dataArray);
        }
        if(e.target.matches(giveawayButton)){
            if(dataArray.length != 0){
                alert('¡Felicidades '+ dataArray[Math.floor(Math.random() * dataArray.length )]+'!');
            }else{
                alert('No hay participantes 😔');
            }
        }
        
        
        
    });
    
    
}

export default digitalGiveaway