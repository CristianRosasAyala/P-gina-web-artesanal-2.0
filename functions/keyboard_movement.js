const movement = (circle, scenario) =>{
    let x = 0,
        y = 0;
    document.addEventListener('keydown', e =>{
        const scenarioLimit = document.querySelector(scenario).getBoundingClientRect();
        const circleLimit = document.querySelector(circle).getBoundingClientRect();
        const {style} = document.querySelector(circle);
        
        if(e.key === 'ArrowLeft'){
            if(circleLimit.left>scenarioLimit.left) x--;
            e.preventDefault();
        }
        if(e.key === 'ArrowRight'){
            if(circleLimit.right<scenarioLimit.right) x++;
            e.preventDefault();
        }
        if(e.key === 'ArrowUp'){
            
            if(circleLimit.top>scenarioLimit.top) y--;
            e.preventDefault();
        }
        if(e.key === 'ArrowDown'){
    
            if(circleLimit.bottom<scenarioLimit.bottom) y++;
            e.preventDefault();
        }
        style.transform = `translate(${x*10+"px"},${y*10+"px"})`;
    })

}
export default movement;