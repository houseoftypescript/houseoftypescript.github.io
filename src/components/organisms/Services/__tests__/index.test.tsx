import { render } from '@testing-library/react';
import { Services } from '../index';

describe('Services', () => {
  it('renders correctly', () => {
    const button = render(
      <Services title={''} description={''} services={[]} />
    );
    expect(button.container).toMatchSnapshot();
  });
});
