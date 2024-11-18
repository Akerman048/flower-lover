import React, { useRef, useState, useEffect } from "react";

import styles from "./Filter.module.css";

export const Filter = ({ categoriesCheckboxes, handleCheckboxChange, handleClearFilters  }) => {
  const [openDropDown, setOpenDropDown] = useState(null);

  const checkboxRef = useRef(null);

  const toggleDropDown = (dropDown) => {
    setOpenDropDown((currentDropDown) =>
      currentDropDown === dropDown ? null : dropDown
    );
  };

  const handleClickOutside = (event) => {
    if (checkboxRef.current && !checkboxRef.current.contains(event.target)) {
      setOpenDropDown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCheckboxChange ]);

  return (
    <div className={styles.filterWrapper} id='catalog'>
      <div className={styles.filterContainer}>
        <ul className={styles.filterCategories}>
          {Object.keys(categoriesCheckboxes).map((category) => (
            <li key={category} className={styles.filterCategorie}>
              <a onClick={() => toggleDropDown(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}...
              </a>
              {openDropDown === category && (
                <ul ref={checkboxRef} className={styles.filterDropDownContent}>
                  {Object.keys(categoriesCheckboxes[category]).map(
                    (checkbox) => (
                      <li key={checkbox}>
                        <input
                          type='checkbox'
                          id={checkbox}
                          class={styles.customCheckbox}
                          checked={categoriesCheckboxes[category][checkbox]}
                          onChange={(e) =>
                            handleCheckboxChange (
                              category,
                              checkbox,
                              e.target.checked
                            )
                          }
                        />
                        <label htmlFor={checkbox} class={styles.customLabel}>
                          {checkbox.replace(/([A-Z])/g, " $1").trim()}
                        </label>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
            
          ))}<button className={styles.filterButton} onClick={handleClearFilters}>Clear all</button>
        </ul>
      </div>
    </div>
  );
};
