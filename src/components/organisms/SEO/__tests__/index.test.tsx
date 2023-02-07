import { render } from '@testing-library/react';
import { SEO } from '../index';

describe('SEO', () => {
  it('renders correctly', () => {
    const button = render(<SEO />);
    expect(button.container).toMatchSnapshot();
  });
});
