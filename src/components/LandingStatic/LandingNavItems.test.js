import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import LandingNavItems from './LandingNavItems';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<LandingNavItems />);
  expect(wrapper).toBeDefined();
});