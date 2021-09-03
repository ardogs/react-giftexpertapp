import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { GiftGridItem } from '../components/GiftGridItem';



describe('Pruebas en componente GiftGridItem', () => {

    const title = 'Un título';
    const url = 'https://localhost.imagen.jpg'
    const wrapper = shallow( <GiftGridItem  title={ title } url={ url }/> );

    test('Debe de mostrar el componente correctamente ', () => {
        expect(toJson( wrapper )).toMatchSnapshot();  
    });

    test('debe de tener un parrafo con el title', () => {
        const p =  wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( title );        
    });

    test('Debe de tener la imagen igual al url y alt de los props ', () => {
        const img =  wrapper.find( 'img' );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('Debe de tener animated__fadeIn ', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes( 'animate__fadeIn' ) ).toBe( true );
    });
      
})
