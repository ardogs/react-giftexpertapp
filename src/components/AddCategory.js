import React, { useState } from 'react' ;
import PropTypes from 'prop-types' ;

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');
    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
        console.log('Handle Input Change - Llamado');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( categoria => [inputValue, ...categoria]  );
            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit } >
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
