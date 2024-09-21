import React from "react";
import { CartProvider } from './component/cartContext';
import {Header} from "./component/header/header";
import { MealCombos } from "./component/mealCombos/mealCombos";
import {Meal} from "./component/meal/meal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'boxicons'; 
import {Home} from "./component/home/home";
import AppProvider from "./component/providers/appProviders";

function App() {
  const AppBoard = ({ children }) => {
    return (
        <div className="App">
          <div>
            <Header/>
            <br></br>
            <br></br>
            </div>
            <div>
            {children}
            </div>
            
        </div>
    );
  };

return (
<Router>
<AppProvider>
<CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <AppBoard>
                <Home />
              </AppBoard>
            }
          />
           <Route
            path="/combosdecomida"
            element={
              <AppBoard>
                <MealCombos />
              </AppBoard>
            }
          />
             <Route
            path="/alimentos"
            element={
              <AppBoard>
                <Meal/>
              </AppBoard>
            }
          />
          {/* <Route path="*" element={<NotFound />} /> sustituir 404 */}
        </Routes>
        </CartProvider>
        </AppProvider>
    </Router>
  );
}

export default App;
