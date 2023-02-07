import { render } from '@testing-library/react';
import { HomeTemplate } from '../index';

describe('HomeTemplate', () => {
  it('renders correctly', () => {
    const button = render(<HomeTemplate />);
    expect(button.container).toMatchSnapshot();
  });
});
