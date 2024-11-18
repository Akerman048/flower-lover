import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

export default function ProductList({ flowersData, categoriesCheckboxes, addToCart }) {
  const [numToShow, setNumToShow] = useState(6);

  const handleShowMore = () => {
    setNumToShow((prevNumToShow) => prevNumToShow + 6);
  };

  // Функція для перевірки, чи будь-який фільтр вибраний
  const isAnyFilterSelected = (filters) => {
    for (let category in filters) {
      for (let filter in filters[category]) {
        if (filters[category][filter]) {
          return true;
        }
      }
    }
    return false;
  };

  // Функція для фільтрації товарів на основі вибраних фільтрів
  const filterProducts = (products, filters) => {
    if (!isAnyFilterSelected(filters)) {
      return products; // Якщо жоден фільтр не вибраний, повернути всі товари
    }
    return products.filter(product => {
      return Object.keys(filters).every(category => {
        const activeFilters = Object.keys(filters[category]).filter(filter => filters[category][filter]);
        if (activeFilters.length === 0) return true;

        if (category === 'price') {
          const price = parseInt(product.price, 10);
          const priceRange = {
            "< 200": price < 200,
            "200 - 500": price >= 200 && price <= 500,
            "500 - 1000": price > 500 && price <= 1000,
            "< 1000": price > 1000,
          };
          return activeFilters.some(filter => priceRange[filter]);
        }

        if (category === 'flowers') {
          return activeFilters.includes(product.flowers);
        }

        if (category === 'whom') {
          return activeFilters.some(filter => product.whom.includes(filter));
        }

        if (category === 'occasion') {
          return activeFilters.some(filter => product.occasion.includes(filter));
        }

        return false;
      });
    });
  };

  // Отримати фільтровані товари
  const filteredFlowersData = filterProducts(flowersData, categoriesCheckboxes);

  // Відображати тільки певну кількість товарів
  const displayedItems = filteredFlowersData.slice(0, numToShow);

  useEffect(() => {
    // This effect will run every time `categoriesCheckboxes` is updated
  }, [categoriesCheckboxes]);

  return (
    <div className={styles.productListContainer}>
      <ul className={styles.productListContainer}>
        {displayedItems.map((item, index) => (
          <li key={index}>
            <ProductCard flowerData={item} addToCart={addToCart} />
          </li>
        ))}
      </ul>
      {numToShow < filteredFlowersData.length && (
        <button className={styles.buttonMore} onClick={handleShowMore}>
          More
        </button>
      )}
    </div>
  );
}
