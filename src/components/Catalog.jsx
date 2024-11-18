import React from "react";

import { Filter } from "./Filter";
import ProductList from "./ProductList";
import catalogBG from "../assets/images/catalogBG.png";

import styles from "./Catalog.module.css";
import BlockTitle from "./common/BlockTitle";

export const Catalog = ({
  categoriesCheckboxes,
  handleCheckboxChange,
  flowersData,
  handleClearFilters,
  addToCart,
  cart,
}) => {



  return (
    <section className={styles.catalogWrapper} id='catalog'>
      <BlockTitle
        title={"Catalog"}
        blockStyles={styles.catalogTitle}
      />

      <div style={{ paddingBottom: "20px" }}>
        <div className={styles.filterContainer}>
          <h3 className={styles.filterCategoriesTitle}>
            Delivery of flowers in Kyiv
          </h3>
          <Filter
            categoriesCheckboxes={categoriesCheckboxes}
            handleCheckboxChange={handleCheckboxChange}
            handleClearFilters={handleClearFilters}
          />
        </div>
      </div>
      <ProductList
        flowersData={flowersData}
        categoriesCheckboxes={categoriesCheckboxes}
        addToCart={addToCart}
      />

      <img className={styles.catalogBG} src={catalogBG} />
    </section>
  );
};
