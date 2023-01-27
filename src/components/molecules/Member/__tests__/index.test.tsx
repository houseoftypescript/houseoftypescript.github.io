import { render } from '@testing-library/react';
import { StaticImageData } from 'next/image';
import { Member } from '../index';

describe('Member', () => {
  it('renders correctly', () => {
    const button = render(<Member avatar={{} as StaticImageData}></Member>);
    expect(button.container).toMatchSnapshot();
  });
});
