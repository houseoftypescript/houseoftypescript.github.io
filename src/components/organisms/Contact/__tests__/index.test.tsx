import { render } from '@testing-library/react';
import { Contact } from '../index';

describe('Contact', () => {
  it('renders correctly', () => {
    const button = render(<Contact></Contact>);
    expect(button.container).toMatchSnapshot();
  });
});
