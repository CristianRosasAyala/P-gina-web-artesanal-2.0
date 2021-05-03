const gallery = () =>{
    const leftBtn = document.querySelector('.gallery-container__button-left'),
    rightBtn = document.querySelector('.gallery-container__button-right'),
    images = document.querySelectorAll('.gallery-container__img');
    
    let cont = 0;
    document.addEventListener('click', e =>{
        
        
        if(e.target === leftBtn &&  cont != 0){
            e.preventDefault();
            images[cont].classList.remove('gallery-container__img-active');
            cont--;
            images[cont].classList.add('gallery-container__img-active');
            
        }
        if(e.target === rightBtn){
            e.preventDefault();
           
            images[cont].classList.remove('gallery-container__img-active');
            cont++;
            if(cont < images.length){
                e.preventDefault();
                images[cont].classList.add('gallery-container__img-active');
                
            }else{
                
                images[0].classList.add('gallery-container__img-active');
                cont = 0;
                
            }
        }
    });
}

export default gallery;