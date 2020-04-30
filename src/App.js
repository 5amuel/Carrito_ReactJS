import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //State para crear productos
  const [ productos, guardarProductos ] = useState([
    {id: 1, nombre: 'camisa ReactJS', precio: 50},
    {id: 2, nombre: 'camisa vuejs', precio: 40},
    {id: 3, nombre: 'camisa NodeJS', precio: 30},
    {id: 4, nombre: 'camisa Angular', precio: 20},
  ]);

  //State para agregar productos al carrito de compras
  const [carrito, agregarProducto] = useState([])

  const fecha = new Date().getFullYear();

//El .map itera sobre un array y retorna un valorh y forEach solo itera
  return (
    <Fragment>
      <Header titulo='Tienda Virtual'numero="20"/>
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
          key={producto.id} 
          // state productos
          producto={producto} 
          productos={productos}

          // state carrito (los elementos de productos pasan de state productos a state carrito con la funcion addToCart)
          carrito={carrito}
          agregarProducto={agregarProducto}
        />

      ))}
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
