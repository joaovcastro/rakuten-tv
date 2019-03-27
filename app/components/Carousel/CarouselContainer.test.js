import React from 'react';
import { shallow } from 'enzyme';

import CarouselContainer from './CarouselContainer';

describe('<CarouselContainer />', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<CarouselContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
