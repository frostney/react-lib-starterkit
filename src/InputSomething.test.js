import React from 'react';
import InputSomething from './InputSomething';

import test from 'ava';
import { shallow } from 'enzyme';

test(t => {
  const wrapper = shallow(<InputSomething />);
  t.is(wrapper.find('input').length, 1);
});
