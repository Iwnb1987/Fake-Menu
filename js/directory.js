const menu = [
    {
      name: 'Chicken Fried Rice',
      description: '24oz of Fried rice with chicken, carrots, onions, and peas.',
      price: '$6.99',
      photo: 'img/cfr.jpeg'
    },
    { 
      name: 'Burger and Beer Combo',
      description: "One pound of fresh cooked ground chuck served with french fries and 24oz of Michelob Ultra light beer. Your choice of add-ons include: tomato, pickles, ketchup, mustard, american cheese, and onions. Extra patties cost an additional $2.00",
      price: '$9.99',
      photo: 'img/burger.jpg'
    },
    { 
      name: 'Spicy Sweet Potato Stirfry',
      description: 'A sweet potato stirfry with broccoli, habanero peppers, garlic cloves, onions, and bacon. Seasoned with garlic and salt.',
      price: '$6.99',
      photo: 'img/stirfry.jpg'
    },
    { 
      name: 'Dozen Donuts',
      description: 'Twelve fresh baked donuts. Choose from our ten different flavors: Plain, Glazed, Chocolate, Chocolate Frosted, Jelly, Strawberry Frosted, Lemon, Cinnamon, Powered, Vanilla Cream', 
      price: '$10.99',
      photo: 'img/donut.jpg'
    },
    { 
      name: 'Caviar with Crème Fraîche',
      description: 'Elegant fish eggs with tangy heavy cream.',
      price: '$29.99',
      photo: 'img/caviar.jpg'
      
    }
    
  ];


//This displays all four list items in the array to the page
  let html = '';
  for(let i = 0; i < menu.length; i++) {
  let item = menu[i];
  html += `
  <h2>${item.name}</h2>
  <h3>${item.description}</h3>
  <p>Price: ${item.price}</p>
  <img src ="${item.photo}" alt = "picture of food">`;
  };
   

  //displays info on the makeshift page
    document.getElementById('btnn').addEventListener('click', () => {
        alert(`You found my secret menu!`);
        document.querySelector('html').innerHTML = `
        <h2>Secret Menu</h2>
        <h1> We sell Bird's nest soup for $59.99</h1>
        <img src="img/BNS.jpg">
        `;
        });
        


        document.querySelector('main').insertAdjacentHTML('beforeend', html);