const d = document;
const validateForm = () =>{
    const form = d.querySelector('.form-container'),
        adviceLabel = d.createElement('p');
    console.log(form.querySelector('#user_name'));
    adviceLabel.classList.add('invalid-input');
    d.addEventListener('keyup', e =>{
        if(e.target === form.querySelector('#user_name')){
            adviceLabel.textContent = 'Nombre de usuario incorrecto';
            form.querySelector('#user_name').insertAdjacentElement("afterend",adviceLabel)
            console.log(e.target.value)
            
            
        }
    })
    
}

export default validateForm;