const createContact = () => {
  const about = document.createElement('div');
  about.className = 'about';

  const aboutCard = document.createElement('div');
  aboutCard.className = 'about-card';

  const img = document.createElement('img');
  img.src = 'img/comida.jpg';
  img.alt = 'about';
  img.className = 'about-img';

  const h2 = document.createElement('h2');
  h2.innerText = 'About Us';
  h2.className = 'about-text';
  const p = document.createElement('p');
  p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, odio aliquid! Quo earum provident culpa eaque asperiores rem soluta, sint quisquam ipsam voluptate nemo saepe laudantium! Accusantium similique ab aliquid.';
  p.className = 'about-text';

  about.appendChild(img);
  aboutCard.appendChild(h2);
  aboutCard.appendChild(p);
  about.appendChild(aboutCard)

  return about;
};

const loadContact = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
};

export default loadContact;