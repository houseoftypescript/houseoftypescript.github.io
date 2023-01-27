import { render } from '@testing-library/react';
import { Button } from '../index';

describe('Button', () => {
  it('renders correctly', () => {
    const button = render(<Button></Button>);
    expect(button.container).toMatchSnapshot();
  });
});
