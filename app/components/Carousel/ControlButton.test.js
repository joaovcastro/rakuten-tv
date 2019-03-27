import React from 'react';
import { shallow } from 'enzyme';

import ControlButton from './ControlButton';

describe('<ControlButton />', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<ControlButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
