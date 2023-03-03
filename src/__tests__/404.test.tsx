import { render } from '@testing-library/react';
import NotFoundPage from '../pages';

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const button = render(<NotFoundPage />);
    expect(button.container).toMatchSnapshot();
  });
});
