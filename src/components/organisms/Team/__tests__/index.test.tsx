import { render } from '@testing-library/react';
import { Team } from '../index';

describe('Team', () => {
  it('renders correctly', () => {
    const button = render(<Team title={''} description={''} members={[]} />);
    expect(button.container).toMatchSnapshot();
  });
});
