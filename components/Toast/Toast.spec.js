import { render } from '@testing-library/react';
 
import Toast from './index';
 
describe('Toast', () => {
  test('renders Toast component without props', () => {
    render(<Toast />);
  });

  test('renders Toast component with props', () => {
    render(<Toast message="Your password is to big"/>);
  });
});