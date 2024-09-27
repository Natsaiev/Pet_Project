import { createSelector } from "@reduxjs/toolkit";
import sampleSize from "lodash/sampleSize";

export const getCategories = (state) => state.categories.categories;
export const getProducts = (state) => state.products.products;

export const selectRandomCategory = createSelector(
  getCategories,
  (categories) => {
    return sampleSize(categories, 4);
  }
);

export const selectRandomProducts = createSelector(
  getProducts,
  (product) => {
    return sampleSize(product, 4);
  }
);



export const getDiscountProducts = createSelector(getProducts, (products) => {
  return products.filter((product) => product.discont_price !== null);
});

export const getRandomProduct = createSelector(
  getDiscountProducts,
  (products) => {
    return sampleSize(products, 4);
  }
);


export const getDiscount = (original_price, discont_price) => {
  return Math.round(100 - discont_price*100/original_price);
}

export const getCartTotal = (productsInCart) => {
  const total =  productsInCart.reduce((acc, el) => {
      if (el.discont_price) {
          return acc + el.discont_price
      }
      return acc + el.price;
  }, 0)
  return total
}