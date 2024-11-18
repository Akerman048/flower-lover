import { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  Catalog,
  About,
  HowToOrder,
  Reviews,
  Contacts,
  CartList
} from "./components";

import { flowersData } from "./data/flowersData";

function App() {
  const defaultFilters = {
    price: {
      "< 200": false,
      "200 - 500": false,
      "500 - 1000": false,
      "< 1000": false,
    },
    flowers: {
      Rose: false,
      "Prairie gentian": false,
      Chrysanthemum: false,
      Tulip: false,
      Hydrangea: false,
      Alstroemeria: false,
    },
    whom: { Female: false, Male: false },
    occasion: {
      Birthday: false,
      Wedding: false,
      Love: false,
      Sympathize: false,
    },
  };

  const [categoriesCheckboxes, setCategoriesCheckboxes] = useState(() => {
    const saved = localStorage.getItem("categoriesCheckboxes");
    return saved
      ? JSON.parse(saved)
      : {
          price: {
            "< 200": false,
            "200 - 500": false,
            "500 - 1000": false,
            "< 1000": false,
          },
          flowers: {
            Rose: false,
            "Prairie gentian": false,
            Chrysanthemum: false,
            Tulip: false,
            Hydrangea: false,
            Alstroemeria: false,
          },
          whom: { Female: false, Male: false },
          occasion: {
            Birthday: false,
            Wedding: false,
            Love: false,
            Sympathize: false,
          },
        };
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prevCartItems) => {
      const existingItem = prevCartItems.find(item => item.title === product.title);
      if (existingItem) {
        return prevCartItems.map(item => 
          item.title === product.title 
            ? { ...item, quantity: item.quantity + product.quantity } 
            : item
        );
      }
      return [...prevCartItems, { ...product }];
    });
  }

  useEffect(() => {
    localStorage.setItem(
      "categoriesCheckboxes",
      JSON.stringify(categoriesCheckboxes)
    );
  }, [categoriesCheckboxes]);

  const handleCheckboxChange = (category, name, checked) => {
    setCategoriesCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [category]: {
        ...prevCheckboxes[category],
        [name]: checked,
      },
    }));
  };

  const handleClearFilters = () => {
    setCategoriesCheckboxes(defaultFilters);
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <main>
          <Hero />
          <Catalog
            categoriesCheckboxes={categoriesCheckboxes}
            handleCheckboxChange={handleCheckboxChange}
            flowersData={flowersData}
            handleClearFilters={handleClearFilters}
            addToCart={addToCart}
            
          />
          <CartList cart={cart} setCart={setCart}/>
          <About />
          <HowToOrder />
          <Reviews />
        </main>
        <div className='footer'>
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
