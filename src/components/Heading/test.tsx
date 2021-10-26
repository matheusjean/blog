import { screen } from '@testing-library/react';
import { Heading } from '.';
import { customRender } from '../../utils/custom-render';

describe('<Heading />', () => {
  it('should render a heading', () => {
    customRender(<Heading>Oiiiii</Heading>);
    const element = screen.getByRole('heading', { name: 'Oiiiii' });
    expect(element).toHaveStyleRule('font-size', '5rem');
  });
});
