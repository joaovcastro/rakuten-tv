import React from 'react';
import { shallow } from 'enzyme';

import MovieListItem from './MovieListItem';

describe('<MovieListItem />', () => {
  const elem = {
    onClick: () => false,
    item: {
      id: 'item-id',
      images: {
        artwork: 'url',
      },
      highlighted_score: {
        score: 5,
      },
    },
  };

  it('correctly renders', () => {
    const wrapper = shallow(<MovieListItem elem={elem} />);
    expect(wrapper).toMatchSnapshot();
  });
});
