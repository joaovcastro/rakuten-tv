import React from 'react';
import { shallow } from 'enzyme';

import MovieCover from './MovieCover';

describe('<MovieCover />', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<MovieCover backgroundImage="url" />);
    expect(wrapper).toMatchSnapshot();
  });
});
