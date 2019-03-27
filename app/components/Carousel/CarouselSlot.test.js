import React from 'react';
import { shallow } from 'enzyme';

import CarouselSlot from './CarouselSlot';

describe('<CarouselSlot />', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<CarouselSlot order={1} />);
    expect(wrapper).toMatchSnapshot();
  });
});
