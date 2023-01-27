import { render } from '@testing-library/react';
import { Project } from '../index';
import { StaticImageData } from 'next/image';

describe('Project', () => {
  it('renders correctly', () => {
    const button = render(<Project image={{} as StaticImageData}></Project>);
    expect(button.container).toMatchSnapshot();
  });
});
