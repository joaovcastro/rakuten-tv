import React from 'react';
import { shallow } from 'enzyme';

import Award from './Award';

describe('<Award />', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<Award />);
    expect(wrapper).toMatchSnapshot();
  });
});
