import React from 'react';
import HelloWorld from './HelloWorld';

import test from 'ava';
import { shallow } from 'enzyme';

test(t => {
  const wrapper = shallow(<HelloWorld />);
  t.is(wrapper.find('div').length, 1);
});
