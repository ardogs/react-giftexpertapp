import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en el componente AddCategory', () => {

    const setCategories = () => {};
    const wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    test('Debe mostrarse correctamente', () => {
        expect( toJson(wrapper) ).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto ', () => {
        const input = wrapper.find( 'input' );
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe( value );
    });
    
});
