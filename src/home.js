const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home','flex-center');

  const card = document.createElement('div');
  card.className = 'home-card';

  const h2 = document.createElement('h2');
  h2.innerText = 'Good food, Good health';

  const mainP = document.createElement('p');
  mainP.innerText = 'Enjoy the best food Here';
  mainP.className = 'mainP';

  home.appendChild(h2);
  home.appendChild(card);
  home.appendChild(mainP);

  return home;
};

const loadHome = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
};

export default loadHome;