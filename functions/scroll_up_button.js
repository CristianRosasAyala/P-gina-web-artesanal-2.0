const scrollUp = (scrollUpButton, scrollUpOn) =>{
    const $scrollUpButton = document.querySelector(scrollUpButton);
    window.addEventListener('scroll', e =>{
        if(window.scrollY>=400){
            
            $scrollUpButton.classList.add(scrollUpOn);
            
        }else{
            $scrollUpButton.classList.remove(scrollUpOn);
        }
    });

    $scrollUpButton.addEventListener('click', e =>{
        window.scrollTo( 0, 0 );
    });
}

export default scrollUp;