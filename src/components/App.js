import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Predefined menu items
  const menuItems = [
    { id: 1, title: 'buttermilk pancakes', category: 'breakfast', price: 15.99, img: './images/item-1.jpeg', desc: `I'm baby woke mlkshk wolf bitters` },
    { id: 2, title: 'diner double', category: 'lunch', price: 13.99, img: './images/item-2.jpeg', desc: `vaporware iPhone mumblecore` },
    { id: 3, title: 'godzilla milkshake', category: 'shakes', price: 6.99, img: './images/item-3.jpeg', desc: `ombucha chillwave fanny pack` },
    { id: 4, title: 'country delight', category: 'breakfast', price: 20.99, img: './images/item-4.jpeg', desc: `Shabby chic keffiyeh neutra` },
    { id: 5, title: 'egg attack', category: 'lunch', price: 22.99, img: './images/item-5.jpeg', desc: `franzen vegan pabst bicycle rights` },
    { id: 6, title: 'oreo dream', category: 'shakes', price: 18.99, img: './images/item-6.jpeg', desc: `Portland chicharrones` },
    { id: 7, title: 'bacon overflow', category: 'breakfast', price: 8.99, img: './images/item-7.jpeg', desc: `carry jianbing normcore` },
    { id: 8, title: 'american classic', category: 'lunch', price: 12.99, img: './images/item-8.jpeg', desc: `on it tumblr kickstarter` },
    { id: 9, title: 'quarantine buddy', category: 'shakes', price: 16.99, img: './images/item-9.jpeg', desc: `skateboard fam synth` },
  ];

  const categories = ['all', 'breakfast', 'lunch', 'shakes'];

  // Filter menu items based on selected category
  const filteredItems = selectedCategory === 'all' ? menuItems : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div id="main">  {/* Root container with id 'main' */}
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={category}
            id={`filter-btn-${index + 1}`}  {/* Category filter buttons with corresponding IDs */}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="menu">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
