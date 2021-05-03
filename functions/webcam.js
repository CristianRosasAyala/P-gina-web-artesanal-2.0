 const webcamFunction = (webcam) =>{
    const $webcam = document.getElementById(webcam);
    navigator.mediaDevices.getUserMedia({video:{width:480, height:240}, audio:false})
       .then(data =>{
           $webcam.srcObject = data;
           $webcam.play();
       })
       .catch(er =>{
           $webcam.innerHTML = `Se produjo el siguiente error: ${er}`;
       });
 }

 export default webcamFunction;