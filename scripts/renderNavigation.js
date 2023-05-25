import {createElement} from "./helper.js";

const nav = document.querySelector('.nav');
//const burger = createBurgerMenu(nav);

export const renderNavigation = () => {
  nav.textContent = '';

  const buttonSingUp = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Зарегистрироваться'
  });

  buttonSingUp.addEventListener('click', () => {
    console.log('Зарегистрироваься');
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
