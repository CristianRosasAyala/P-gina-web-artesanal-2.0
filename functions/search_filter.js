
const searchFilter = (input, cards) =>{
    document.addEventListener('keyup', e=>{
        if(e.target.matches(input)){
            document.querySelectorAll(cards).forEach(el => el.textContent.toLowerCase().includes(e.target.value)
             ? el.classList.remove('filter')
             : el.classList.add('filter'));
        }
    });
}
export default searchFilter;