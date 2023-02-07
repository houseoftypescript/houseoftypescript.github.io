import { render } from '@testing-library/react';
import { Footer } from '../index';

describe('Footer', () => {
  it('renders correctly', () => {
    const button = render(<Footer title="" socialLinks={[]}></Footer>);
    expect(button.container).toMatchSnapshot();
  });
});
