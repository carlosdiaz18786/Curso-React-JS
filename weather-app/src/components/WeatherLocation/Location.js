import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => (
   //debugger; //punto de interrupcion
   //Destructuring
    /*Es decir tengo un parametro dentro del objeto de mismo nombre de city por eso usamos destructuring 
    const { city } = props;*/

    
    <div>
        <h1>{city}</h1>
    </div>
);

Location.propTypes={
    city: PropTypes.string.isRequired,
};
export default Location;