import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;
    //Agregar producto al carrito
    const seleccionarProducto = (id) => {
        //.filter filtra y retorna unicamente el elemento del array que conincida con id
        const producto = productos.filter(producto => producto.id === id);
        
        // la funcion agregarProducto modifica el state carrito que inicialmente es un array vacio
        agregarProducto([...carrito, ...producto])
        console.log(producto);
        // El spread opeator(...) concatena los arreglos sin borrar el que ya se agrego
    }

    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !==id);
        agregarProducto(productos)
    }

    return ( 
        <div>
            <p>{id}</p>
            <h2>{nombre}</h2>
            <p>${precio}</p>
    
           
            { productos
            
                ?
                    (
                        <button 
                            type="button"
                            onClick={() => seleccionarProducto(id)}
                        >Comprar</button>
                    )
                :
                    (
                        <button 
                            type="button"
                            onClick={() => eliminarProducto(id)}
                        >Eliminar</button>
                    )   

            }
        </div>
    );
}
 
export default Producto;