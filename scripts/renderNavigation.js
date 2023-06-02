import { createBurgerMenu } from "./createBurgerMenu.js";
import {createElement} from "./helper.js";

const nav = document.querySelector('.nav');
createBurgerMenu(nav, 'nav_active');


export const renderNavigation = () => {
  nav.textContent = '';

  const buttonSingUp = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Зарегистрироваться'
  });

  buttonSingUp.addEventListener('click', () => {
    renderModal({
      title: 'Регистрация',
      description: 'Введите ваши данные',
      btnSubmit: 'Зарегистрироваться',
      submitHandler: async (event) => {
        const formData = new FormData(event.target);
        const credentials = {
          login: formData.get('logib'),
          password: formData.get('password'),
        };

        try {
          const response = await fetch(`$(API_URL)/login`, {
            
          })
        } catch (error) {

        }
      }
    })
  })

  const buttonLogin = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Войти'
  });

  buttonLogin.addEventListener('click', () => {
    console.log('Войти');
  })

  nav.append(buttonSingUp, buttonLogin);

};
