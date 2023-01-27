import { render } from '@testing-library/react';
import { Heading } from '../index';

describe('Heading', () => {
  it('renders correctly', () => {
    const button = render(<Heading></Heading>);
    expect(button.container).toMatchSnapshot();
  });
});
