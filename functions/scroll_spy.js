const scrollSpy = () =>{
    const titles = document.querySelectorAll('section[data-scroll-spy]');
    
    const callBack = (entries) =>{
        
        entries.forEach(entry =>{
            
            let id = entry.target.getAttribute('id');
            if(entry.isIntersecting){
                document.querySelector(`.menu a[href="#${id}"]`).classList.add('is-active');
                         
            }else{
                document.querySelector(`.menu a[href="#${id}"]`).classList.remove('is-active');
            }
        });
    }
    const observer = new IntersectionObserver(callBack, {
        threshold: [0.5, 0.75],

    });
    titles.forEach(el => {
        observer.observe(el);
    })
}

export default scrollSpy;