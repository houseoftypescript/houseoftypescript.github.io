import { render } from '@testing-library/react';
import { Checkbox } from '../index';

describe('Checkbox', () => {
  it('renders correctly', () => {
    const button = render(<Checkbox></Checkbox>);
    expect(button.container).toMatchSnapshot();
  });
});
