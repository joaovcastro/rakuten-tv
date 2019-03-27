import React from 'react';
import { shallow } from 'enzyme';

import Carousel from './Carousel';

describe('<Carousel />', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toMatchSnapshot();
  });
});
