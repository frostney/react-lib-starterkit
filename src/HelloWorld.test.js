import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import HelloWorld from './HelloWorld';

test((t) => {
  const wrapper = shallow(<HelloWorld />);
  t.is(wrapper.find('div').length, 1);
});
