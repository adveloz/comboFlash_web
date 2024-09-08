// import React from "react";
// import Img from "../header/logo.png"
// import serviTask from "../axiosConfig";

// const iniData = (data) => {
//   let ret = [];
  
//   data.forEach((element) => {
//     console.log(element)
//     ret.push({
//       id: element.id,
//       name: element.name,
//       description: element.description,
//       price: element.price,
//       areaCountry: element.areaCountryName
//     });
//   });
//   return ret;
// };

// export const ProductsList = () => {
//   const [items, setItems] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [refreshTable, setRefreshTable] = React.useState(0);

//   React.useEffect(() => {
//     setLoading(true);
//     serviTask
//       .get('mealCombos')
//       .then((response) => {
//         setItems(iniData(response.data));
//       })
//       .catch((error) => {
//         // showNotificationApp("Error cargando datos del sistema", "error");
//         console.log(error);
//       })
//       .finally(() => setLoading(false));
//   }, [refreshTable]);

//   return (
//     <>
//     <h1 className="title">Productos</h1>
//     <div className="productos">
//     <div className="producto">
//       <a href="#">
//       <div className="producto__img">
//         <img src={Img} alt="producto"/>
//       </div>
//       </a>
//       <div className="producto__footer">
//         {console.log("Es akiiiiiiii", items )}
//         <h1>{items.name}</h1>
//         <p>categoria</p>
//         <p className="price">$320</p>
//       </div>
//       <div className="buttom">
//         <button className="btn">
//           Anadir al carrito
//         </button>
//         <div>
//         <a href="#" className="btn">
//           Vista
//         </a>
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   )
// }

import React from "react";
import Img from "./Pasted image.png";
import serviTask from "../axiosConfig";
import { useContext } from 'react';
import { CartContext } from './../cartContext';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="producto">
    <a href="#">
      <div className="producto__img">
        <img src={Img} alt="producto" />
      </div>
    </a>
    <div className="producto__footer">
      <h1>Producto: {product.name}</h1>
      <p>Provincia: {product.areaCountry}</p>
      <p className="price">Precio: ${product.price}</p>
      <p>Descripción: {product.description}</p>
    </div>
    <div className="buttom">
      <button className="btn" onClick={() => onAddToCart(product)}>Agregar al carrito</button>
    </div>
      {/* <div>
        <a href="#" className="btn">Ver</a>
      </div> */}
  </div>
);

const iniData = (data) => {
  return data.map((element) => ({
    id: element.id,
    name: element.name,
    description: element.description,
    price: element.price,
    areaCountry: element.areaCountryName
  }));
};

export const MealCombos = () => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    serviTask
      .get('mealCombos')
      .then((response) => {
        setItems(iniData(response.data));
      })
      .catch((error) => {
        console.error("Error cargando datos:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredItems = items.filter(item => 
    item.areaCountry.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <h1 className="title">Combos de comida</h1>
      <div className="filter">
      <form onSubmit={(e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el formulario si lo necesitas
      }}>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar por provincia..."
        />
      </form>
      </div>
      <div className="productos">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          filteredItems.map((product, index) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)}/>
          ))
        )}
      </div>
 
    </>
  );
};
