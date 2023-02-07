import { render } from '@testing-library/react';
import { Why } from '../index';

describe('Why', () => {
  it('renders correctly', () => {
    const button = render(<Why reasons={[]} />);
    expect(button.container).toMatchSnapshot();
  });
});
