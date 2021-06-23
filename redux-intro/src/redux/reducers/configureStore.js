import { createStore } from 'redux'
import reducers from "."

 
export default function configureStore(){
    return createStore(reducers)
}