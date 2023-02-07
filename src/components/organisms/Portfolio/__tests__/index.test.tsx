import { render } from '@testing-library/react';
import { Portfolio } from '../index';

describe('Portfolio', () => {
  it('renders correctly', () => {
    const button = render(
      <Portfolio title={''} description={''} projects={[]} />
    );
    expect(button.container).toMatchSnapshot();
  });
});
