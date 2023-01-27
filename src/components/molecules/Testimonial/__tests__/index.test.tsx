import { render } from '@testing-library/react';
import { Testimonial } from '../index';

describe('Testimonial', () => {
  it('renders correctly', () => {
    const button = render(<Testimonial></Testimonial>);
    expect(button.container).toMatchSnapshot();
  });
});
