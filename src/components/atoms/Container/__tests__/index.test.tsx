import { render } from '@testing-library/react';
import { Container } from '../index';

describe('Container', () => {
  it('renders correctly', () => {
    const button = render(<Container></Container>);
    expect(button.container).toMatchSnapshot();
  });
});
