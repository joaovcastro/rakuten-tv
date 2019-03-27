import React from 'react';
import { shallow } from 'enzyme';

import WelcomeBanner from './WelcomeBanner';

describe('<WelcomeBanner />', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<WelcomeBanner />);
    expect(wrapper).toMatchSnapshot();
  });
});
