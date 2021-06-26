import * as actionTypes from "./actionTypes"

export function getProductsSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
  }
  
  export function getProducts(categoryId) {
    return function (dispatch) {
      let url = "http://localhost:3000/products";
      if(categoryId){
        url = url +"?categoryId="+categoryId
      }
     
      return fetch(url).then(response => response.json()).then(result => dispatch(getProductsSuccess(result)));
    };
  }
  



