import * as actionTypes from "./actionTypes";

export const increaseCounter=()=>({
    // fonksiyon'un fonksiyonu da bir fonksiyon. parametre de obje

    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})