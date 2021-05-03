const networkDetection = (networkWarning, networkWarningOnline, networkWarningOffline) =>{
    const $networkWarning = document.getElementById(networkWarning);
    const estadoRedNormal = () =>{
    setTimeout(() => {
        $networkWarning.classList.remove(networkWarningOnline);
        $networkWarning.classList.remove(networkWarningOffline);
        $networkWarning.innerHTML = '';
    }, 3000);
    
    
    }
    const estadoRedOnline = () =>{
    
        console.log(navigator.onLine);
        $networkWarning.classList.add(networkWarningOnline);
        $networkWarning.innerHTML = `<h2>De nuevo en linea</h2>`;
    }
    const estadoRedOffline = () =>{
    
        
        $networkWarning.classList.add(networkWarningOffline);
        $networkWarning.innerHTML = `<h2>Sin conexión</h2>`;

    }
    window.addEventListener('online', async e=>{
    
        if (navigator.onLine) {
            await estadoRedOnline();
            await estadoRedNormal();
            
        }
    } );
    window.addEventListener('offline',async e=>{
        if (!navigator.onLine) {
            await estadoRedOffline();
            await estadoRedNormal();
        }
    });
}
export default networkDetection;