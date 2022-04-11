import React from 'react';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const Card = () => {
  return <div>This is a card</div>;
};

export default Card;
