import React from "react";
import { CartProvider } from './component/cartContext';
import {Header} from "./component/header/header";
import { MealCombos } from "./component/mealCombos/mealCombos";
import {Meal} from "./component/meal/meal";
import 'boxicons'; 

function App() {
  return (
    <div className="App">
       <CartProvider>
    <Header/>
    <MealCombos/>
    <br></br>
    <hr></hr>
    <Meal/>
    </CartProvider>
    </div>
  );
}

export default App;
