import React from "react";
import { CartProvider } from './component/cartContext';
import {Header} from "./component/header/header";
import { MealCombos } from "./component/mealCombos/mealCombos";
import 'boxicons'; 

function App() {
  return (
    <div className="App">
       <CartProvider>
    <Header/>
    <MealCombos/>
    </CartProvider>
    </div>
  );
}

export default App;
