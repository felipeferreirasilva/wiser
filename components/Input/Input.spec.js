import { render } from '@testing-library/react';
 
import Input from './index';
 
describe('Input', () => {
  test('renders Input component without props', () => {
    render(<Input />);
  });

  test('renders Input component with props', () => {
    render(<Input id="01" type="text" value="felipe" onChange={() => null} label="Name" error="Name is invalid" required/>);
  });
});