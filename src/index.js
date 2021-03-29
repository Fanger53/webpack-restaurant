import './style.scss';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.button-nav');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
};

const createNav = () => {
  const nav = document.createElement('nav');
  nav.className = 'flex-center';
  const buttonHome = document.createElement('button');
  buttonHome.className = 'button-nav';
  buttonHome.textContent = 'Home';
  buttonHome.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(buttonHome);
    loadHome();
  });

  const buttonMenu = document.createElement('button');
  buttonMenu.className = 'button-nav';
  buttonMenu.textContent = 'Menu';
  buttonMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(buttonMenu);
    loadMenu();
  });

  const buttonContact = document.createElement('button');
  buttonContact.className = 'button-nav';
  buttonContact.textContent = 'Contact';
  buttonContact.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(buttonContact);
    loadContact();
  });

  nav.appendChild(buttonHome);
  nav.appendChild(buttonMenu);
  nav.appendChild(buttonContact);

  return nav;
};

const createHeader = () => {
  const header = document.createElement('header');
  header.className = 'header';

  const div = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.className = 'rest-name';
  h1.innerText = 'Maita Restaurant';

  div.appendChild(h1);
  header.appendChild(div);
  header.appendChild(createNav());

  return header;
};

const createMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer', 'flex-center');

  const footerContent = document.createElement('p');
  footerContent.innerText = 'Copyright © 2021 David Castillo ';

  const iconGitHub = document.createElement('i');
  iconGitHub.className = 'fab fa-github';

  const iconLinkedin = document.createElement('i');
  iconLinkedin.className = 'fab fa-linkedin-in';

  footerContent.appendChild(iconGitHub);
  footerContent.appendChild(iconLinkedin);
  footer.appendChild(footerContent);
  return footer;
};

const initializeWebsite = () => {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.button-nav'));
  loadHome();
};

initializeWebsite();