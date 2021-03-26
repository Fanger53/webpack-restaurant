const createContact = () => {
  const about = document.createElement('div');
  about.className = 'about';

  const aboutImage = document.createElement('div');
  aboutImage.className = 'about-image';

  const aboutInfo = document.createElement('div');
  aboutInfo.className = 'about-image';

  const img = document.createElement('img');
  img.src = 'img/about.jpg';
  img.alt = 'about';

  const h2 = document.createElement('h2');
  h2.innerText = 'About us';

  const p = document.createElement('p');
  p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, odio aliquid! Quo earum provident culpa eaque asperiores rem soluta, sint quisquam ipsam voluptate nemo saepe laudantium! Accusantium similique ab aliquid.';

  aboutImage.appendChild(img);
  aboutInfo.appendChild(h2);
  aboutInfo.appendChild(p);

  about.appendChild(aboutImage);
  about.appendChild(aboutInfo);

  return about;
};

const loadContact = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
};

export default loadContact;