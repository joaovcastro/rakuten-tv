import React from 'react';
import { shallow } from 'enzyme';

import Genre from './Genre';

describe('<Genre />', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<Genre name="genre" icon="url"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
