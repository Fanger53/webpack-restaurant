import './style.scss';
import loadHome from './home';

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

  const hh = document.createElement('button');
  hh.className = 'button-nav';
  hh.textContent = 'Home';
  hh.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(hh);
    loadHome();
  });

  const hm = document.createElement('button');
  hm.className = 'button-nav';
  hm.textContent = 'Menu';
  hm.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(hm);
    loadMenu();
  });

  const hc = document.createElement('button');
  hc.className = 'button-nav';
  hc.textContent = 'Contact';
  hc.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(hc);
    loadContact();
  });

  nav.appendChild(hh);
  nav.appendChild(hm);
  nav.appendChild(hc);

  return nav;
};

const createHeader = () => {
  const header = document.createElement('header');
  header.className = 'header';

  const div = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.className = 'restaurant-name';
  h1.innerText = 'Maita';

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
  footer.className = 'footer';

  const footerContent = document.createElement('p');
  footerContent.innerText = 'Copyright © 2021 David Leonardo Castillo ';

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