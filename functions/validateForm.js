const d = document;
const validateForm = () =>{
    const form = d.querySelector('.form-container'),
        adviceLabel = d.createElement('p');
    console.log(form.querySelector('#user_name'));
    adviceLabel.classList.add('invalid-input');
    d.addEventListener('keyup', e =>{

        //Verifica el usuario
        if(e.target === form.querySelector('#user_name')){
            adviceLabel.textContent = '';
            if(/^[A-Za-z0-9]+$/g.test(e.target.value)){
                form.querySelector('#user_name').classList.add('form-container-item-correct');
            }else{
                adviceLabel.textContent = 'Nombre de usuario incorrecto, sólo se aceptan letras y números sin espacios';
                form.querySelector('#user_name').insertAdjacentElement("afterend",adviceLabel);
                form.querySelector('#user_name').classList.remove('form-container-item-correct');
            }
        }
        
        //Verifica el email
        if(e.target === form.querySelector('#user_mail')){
            adviceLabel.textContent = '';
            if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g.test(e.target.value)){
                form.querySelector('#user_mail').classList.add('form-container-item-correct');
            }else{
                adviceLabel.textContent = 'dirección de correo incorrecto';
                form.querySelector('#user_mail').insertAdjacentElement("afterend",adviceLabel);
                form.querySelector('#user_mail').classList.remove('form-container-item-correct');
            }
        }

        //Verifica el asunto
        if(e.target === form.querySelector('#user_subject')){
            adviceLabel.textContent = '';
            if(/^[a-zA-Z0-9_ ]*$/g.test(e.target.value)){
                form.querySelector('#user_subject').classList.add('form-container-item-correct');
            }else{
                adviceLabel.textContent = 'Asunto incorrecto, sólo letras y números';
                form.querySelector('#user_subject').insertAdjacentElement("afterend",adviceLabel);
                form.querySelector('#user_subject').classList.remove('form-container-item-correct');
            }
        }

        //Verifica el asunto
        if(e.target === form.querySelector('#user_subject')){
            adviceLabel.textContent = '';
            if(/^[a-zA-Z0-9_ ]*$/g.test(e.target.value)){
                form.querySelector('#user_subject').classList.add('form-container-item-correct');
            }else{
                adviceLabel.textContent = 'Asunto incorrecto, sólo letras y números';
                form.querySelector('#user_subject').insertAdjacentElement("afterend",adviceLabel);
                form.querySelector('#user_subject').classList.remove('form-container-item-correct');
            }
        }

        //Verifica el texto
        if(e.target === form.querySelector('#user_text')){
            adviceLabel.textContent = '';
            if(/^.{1,255}$/g.test(e.target.value)){
                form.querySelector('#user_text').classList.add('form-container-item-correct');
            }else{
                adviceLabel.textContent = 'Sólo se admiten hasta 255 carácteres';
                form.querySelector('#user_text').insertAdjacentElement("afterend",adviceLabel);
                form.querySelector('#user_text').classList.remove('form-container-item-correct');
            }
        }


    });
    
}

export default validateForm;