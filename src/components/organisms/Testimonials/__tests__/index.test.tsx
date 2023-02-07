import { render } from '@testing-library/react';
import { Testimonials } from '../index';

describe('Testimonials', () => {
  it('renders correctly', () => {
    const button = render(<Testimonials testimonials={[]} />);
    expect(button.container).toMatchSnapshot();
  });
});
