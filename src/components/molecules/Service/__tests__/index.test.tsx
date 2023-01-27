import { render } from '@testing-library/react';
import { Service } from '../index';
import { StaticImageData } from 'next/image';

describe('Service', () => {
  it('renders correctly', () => {
    const button = render(<Service image={{} as StaticImageData}></Service>);
    expect(button.container).toMatchSnapshot();
  });
});
