const deviceDetector = (deviceInfo) =>{
    const $deviceInfo = document.querySelector(deviceInfo),
        ua = navigator.userAgent,
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function(){
                return this.android()||this.ios()||this.windows();
            }
        },
        isDesktop = {
            linux: ua.match(/linux/i),
            mac: ua.match(/ios/i),
            windows: ua.match(/windows nt/i),
            any: function() {
                return this.linux||this.mac||this.windows;
            }
        },
        browser = {
            chrome: ua.match(/chrome/i),
            firefox: ua.match(/firefox/i),
            edge: ua.match(/edge/i),
            safari: ua.match(/safari/i),
            any: function () {
                return this.chrome||this.firefox||this.edge||this.safari;
            }
        };
    $deviceInfo.innerHTML = `<ul>
        <li>Info: ${ua}</li>
        <li>Plataforma: ${isDesktop.any() ? isDesktop.any(): isMobile.any()}</li>
        <li>Navegador: ${browser.any()}</li>
    </ul>`;

     //Exclusive content
     if (browser.chrome) {
        $deviceInfo.innerHTML += `<p style = "color:blue">CONTENIDO EXCLUSIVO DE CHROME</p>`
    }
    if (browser.firefox) {
        $deviceInfo.innerHTML += `<p style = "color:orange">CONTENIDO EXCLUSIVO DE FIREFOX</p>`
    }
}

export default deviceDetector;