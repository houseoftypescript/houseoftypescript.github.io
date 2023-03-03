import { render } from '@testing-library/react';
import HomePage from '../pages';

describe('HomePage', () => {
  it('renders correctly', () => {
    const button = render(<HomePage />);
    expect(button.container).toMatchSnapshot();
  });
});
