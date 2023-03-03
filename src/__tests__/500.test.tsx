import { render } from '@testing-library/react';
import InternalServerErrorPage from '../pages';

describe('InternalServerErrorPage', () => {
  it('renders correctly', () => {
    const button = render(<InternalServerErrorPage />);
    expect(button.container).toMatchSnapshot();
  });
});
