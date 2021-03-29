const createMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu', 'bg-img');

  const food1 = document.createElement('div');
  food1.classList.add('food');
  const imgFood1 = document.createElement('div');
  imgFood1.classList.add('img-food', 'img-food1', 'bg-img');
  // parte de abajo
  const divFood1 = document.createElement('div');
  divFood1.className = 'divfood';
  const hFood1 = document.createElement('h3');
  hFood1.innerText = 'Hamburguer ';
  hFood1.classList.add('text-food', 'text-color', 'h-food');
  const pFood1 = document.createElement('p');
  pFood1.innerText = '$ 12.000';
  pFood1.classList.add('text-food', 'text-color', 'p-food');
  const pFood1Second = document.createElement('p');
  pFood1Second.innerText = 'Hot and Tasty';
  pFood1Second.classList.add('text-food', 'text-color');

  const food2 = document.createElement('div');
  food2.classList.add('food');
  const imgFood2 = document.createElement('div');
  imgFood2.classList.add('img-food', 'img-food2', 'bg-img');
  // parte de abajo
  const divFood2 = document.createElement('div');
  divFood2.className = 'divfood';
  const hFood2 = document.createElement('h3');
  hFood2.innerText = 'Caesar salad ';
  hFood2.classList.add('text-food', 'text-color', 'h-food');
  const pFood2 = document.createElement('p');
  pFood2.innerText = '$ 20.000';
  pFood2.classList.add('text-food', 'text-color', 'p-food');
  const pFood2Second = document.createElement('p');
  pFood2Second.innerText = 'Fresh and Tasty';
  pFood2Second.classList.add('text-food', 'text-color');

  const food3 = document.createElement('div');
  food3.classList.add('food');
  const imgFood3 = document.createElement('div');
  imgFood3.classList.add('img-food', 'img-food3', 'bg-img');
  // parte de abajo
  const divFood3 = document.createElement('div');
  divFood3.className = 'divfood';
  const hFood3 = document.createElement('h3');
  hFood3.innerText = 'Ice Cream';
  hFood3.classList.add('text-food', 'text-color', 'h-food');
  const pFood3 = document.createElement('p');
  pFood3.innerText = '$ 8.000';
  pFood3.classList.add('text-food', 'text-color', 'p-food');
  const pFood3Second = document.createElement('p');
  pFood3Second.innerText = 'Cold and Sweet';
  pFood3Second.classList.add('text-food', 'text-color');

  const food4 = document.createElement('div');
  food4.classList.add('food');
  const imgFood4 = document.createElement('div');
  imgFood4.classList.add('img-food', 'img-food4', 'bg-img');
  // parte de abajo
  const divFood4 = document.createElement('div');
  divFood4.className = 'divfood';
  const hFood4 = document.createElement('h3');
  hFood4.innerText = 'Honey Rips';
  hFood4.classList.add('text-food', 'text-color', 'h-food');
  const pFood4 = document.createElement('p');
  pFood4.innerText = '$ 20.000';
  pFood4.classList.add('text-food', 'text-color', 'p-food');
  const pFood4Second = document.createElement('p');
  pFood4Second.innerText = 'Sweet and Hot';
  pFood4Second.classList.add('text-food', 'text-color');

  const food5 = document.createElement('div');
  food5.classList.add('food');
  const imgFood5 = document.createElement('div');
  imgFood5.classList.add('img-food', 'img-food5', 'bg-img');
  // parte de abajo
  const divFood5 = document.createElement('div');
  divFood5.className = 'divfood';
  const hFood5 = document.createElement('h3');
  hFood5.innerText = 'Burritos';
  hFood5.classList.add('text-food', 'text-color', 'h-food');
  const pFood5 = document.createElement('p');
  pFood5.innerText = '$ 20.000';
  pFood5.classList.add('text-food', 'text-color', 'p-food');
  const pFood5Second = document.createElement('p');
  pFood5Second.innerText = 'Tasty and Hot';
  pFood5Second.classList.add('text-food', 'text-color');

  const food6 = document.createElement('div');
  food6.classList.add('food');
  const imgFood6 = document.createElement('div');
  imgFood6.classList.add('img-food', 'img-food6', 'bg-img');
  // parte de abajo
  const divFood6 = document.createElement('div');
  divFood6.className = 'divfood';
  const hFood6 = document.createElement('h3');
  hFood6.innerText = 'Burritos';
  hFood6.classList.add('text-food', 'text-color', 'h-food');
  const pFood6 = document.createElement('p');
  pFood6.innerText = '$ 20.000';
  pFood6.classList.add('text-food', 'text-color', 'p-food');
  const pFood6Second = document.createElement('p');
  pFood6Second.innerText = 'Tasty and Hot';
  pFood6Second.classList.add('text-food', 'text-color');
  
  
  
  menu.appendChild(food1);
  food1.appendChild(imgFood1);
  food1.appendChild(divFood1);
  divFood1.appendChild(hFood1);
  divFood1.appendChild(pFood1);
  food1.appendChild(pFood1Second);
  menu.appendChild(food2);
  food2.appendChild(imgFood2);
  food2.appendChild(divFood2);
  divFood2.appendChild(hFood2);
  divFood2.appendChild(pFood2);
  food2.appendChild(pFood2Second);
  menu.appendChild(food3);
  food3.appendChild(imgFood3);
  food3.appendChild(divFood3);
  divFood3.appendChild(hFood3);
  divFood3.appendChild(pFood3);
  food3.appendChild(pFood3Second);
  menu.appendChild(food4);
  food4.appendChild(imgFood4);
  food4.appendChild(divFood4);
  divFood4.appendChild(hFood4);
  divFood4.appendChild(pFood4);
  food4.appendChild(pFood4Second);
  menu.appendChild(food5);
  food5.appendChild(imgFood5);
  food5.appendChild(divFood5);
  divFood5.appendChild(hFood5);
  divFood5.appendChild(pFood5);
  food5.appendChild(pFood5Second);
  menu.appendChild(food6);
  food6.appendChild(imgFood6);
  food6.appendChild(divFood6);
  divFood6.appendChild(hFood6);
  divFood6.appendChild(pFood6);
  food6.appendChild(pFood6Second);
  return menu;
};

const loadMenu = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
};

export default loadMenu;