import { render } from '@testing-library/react';
import { Input } from '../index';

describe('Input', () => {
  it('renders correctly', () => {
    const button = render(<Input></Input>);
    expect(button.container).toMatchSnapshot();
  });
});
