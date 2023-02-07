import { render } from '@testing-library/react';
import { Navbar } from '../index';

describe('Navbar', () => {
  it('renders correctly', () => {
    const button = render(<Navbar title={''} />);
    expect(button.container).toMatchSnapshot();
  });
});
