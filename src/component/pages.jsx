import React from "react";
import {Routes, Route} from "react-router-dom";
import { Home } from "./home/home";
import { MealCombos } from "./mealCombos/mealCombos";

export const Pages = () => {
  return (
    <section>
      <Routes>  
        <Route path="/" exact component={Home}/>
        <Route path="/productos" exact component={MealCombos}/>
      </Routes>
    </section>
  );
}


