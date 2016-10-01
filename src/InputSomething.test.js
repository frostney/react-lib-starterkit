import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import InputSomething from './InputSomething';

test((t) => {
  const wrapper = shallow(<InputSomething />);
  t.is(wrapper.find('input').length, 1);
});
