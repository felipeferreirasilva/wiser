import { render } from '@testing-library/react';
 
import Button from './index';
 
describe('Button', () => {
  test('renders Button component without props', () => {
    render(<Button/>);
  });

  test('renders Button component with props', () => {
    render(<Button label="Entrar" type="submit" value="123" onClick={() => null} primary/>);
  });
});