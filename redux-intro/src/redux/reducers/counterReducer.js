import * as actionTypes from "../actions/actionTypes";

// bütünn reducerlar çağırdığı aksiyonu içerip içermediğine bakacak. reducerLarın yaptığı tek şey, action a göre state belirlemek.
// state'i kontrol ettiğimiz yer tam olarak burası. bizim sadece reducerdaki state mizden yararlanacak.
// reducer içinde tamamen basit state yönetimi işleri yapılır.

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state  + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default counterReducer;


// javascript immutibility


