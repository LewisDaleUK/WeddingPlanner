import { mount } from 'enzyme';
import * as React from 'react';
import { H1 } from '../H1';

describe('H1', () => {
  it('should render', () => {
    const mounted = mount(
      <H1>Example Mount</H1>,
    );
    const expected = true;
    const result = mounted.exists();
    expect(result).toEqual(expected);
  });
});
