const createHome = () => {
  const home = document.createElement('div');
  home.className = 'home';

  const img = document.createElement('img');
  img.src = 'img/comida.jpg';
  img.alt = 'food';
  img.classList.add('home-img', 'center');

  const h2 = document.createElement('h2');
  h2.innerText = 'Happy Belly Happy Life';

  const mainP = document.createElement('p');
  mainP.innerText = 'Enjoy the best food its Here';

  home.appendChild(h2);
  home.appendChild(img);
  home.appendChild(mainP);

  return home;
};

const loadHome = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
};

export default loadHome;