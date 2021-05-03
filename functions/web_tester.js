const tester = (buttonOpenWindow, buttonCloseWindow) =>{
    let newUrl;
    document.addEventListener('click', e =>{
        const openWindow = (url = null, ancho = null, largo = null) =>{
            if (url && ancho && largo) {
                if (newUrl) {
                    newUrl.close();
                    newUrl = null;
                }
                console.log('abriendo ventana');
                newUrl = window.open(url, "", `width=${ancho},height=${largo}`);
                
            }else{
                alert('Completa los campos');
            }
        }
        if (e.target.matches(buttonOpenWindow)) {
        
            let url = document.getElementById('url').value,
                width = document.getElementById('width').value,
                height = document.getElementById('height').value;
            openWindow(url, width, height);
        }
        if (e.target.matches(buttonCloseWindow)){
        
            if (newUrl) {
                newUrl.close();
                newUrl = null;
            }else{
                alert('No hay ventana para cerrar');
            }
        }

    });
}
export default tester;