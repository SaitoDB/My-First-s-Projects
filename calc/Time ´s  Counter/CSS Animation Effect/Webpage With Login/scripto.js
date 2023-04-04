const wrapper = document.querySelector('.wrapper'); // Criei uma var e atribui a essa var a classe wrapper através do comando document.querySelector ('wrapper'). O mesmo fiz pra todos...
const loginLink = document.querySelector ('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconCloser = document.querySelector('.icon-closer');


registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
}); // Na variavel registerLink, adicionei uma lista de eventos, onde ao clicar ele muda a classe wrapper, para wrapper active
loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
}); // Aqui ele remove o active de wrapper
btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
}); // Lista de evento que permite eu abrir com um click o login
iconCloser.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
}); // Aqui permite fechar
