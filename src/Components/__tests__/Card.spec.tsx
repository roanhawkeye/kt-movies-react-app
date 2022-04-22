import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card/Card';

describe('<Card />', () => {
  it('sample test for card - dummy ', () => {
    const card = shallow(<Card imageURL="" name="" year="" categories="" />);

    expect(card).toBe(card);
  });
});
