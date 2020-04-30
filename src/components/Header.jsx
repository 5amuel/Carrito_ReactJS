import React from 'react';

function Header({titulo}){
   return(
   <h1 className="encabezado">{titulo}</h1>
   )
    
}
console.log(Header.props);


export default Header;