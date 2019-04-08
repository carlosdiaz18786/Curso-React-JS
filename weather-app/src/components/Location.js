import React from 'react';

const Location = ({city}) => (
   //debugger; //punto de interrupcion
   //Destructuring
    /*Es decir tengo un parametro dentro del objeto de mismo nombre de city por eso usamos destructuring 
    const { city } = props;*/

    
    <div>
        <h1>{city}</h1>
    </div>
    
);

export default Location;