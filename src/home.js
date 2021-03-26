const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home','flex-center');

  const card = document.createElement('div');
  card.classList.add('home-card','bg-img');

  const h2 = document.createElement('h2');
  h2.innerText = 'Maita Restaurant';
  h2.classList.add('h2-margin', 'text-color');

  const mainP = document.createElement('p');
  mainP.innerText = 'In Maita restaurant, you can find high quality, tasty and healthy  dishes. ';
  mainP.classList.add('mainP', 'text-color');

  const secondP = document.createElement('p');
  secondP.innerText = 'Enjoy the best food Here';
  secondP.classList.add('mainP', 'text-color');

  home.appendChild(card);
  card.appendChild(h2);
  card.appendChild(secondP);
  card.appendChild(mainP);


  return home;
};

const loadHome = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
};

export default loadHome;