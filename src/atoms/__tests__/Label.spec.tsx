import {render} from '@testing-library/react-native';
import React from 'react';

import Label from '~/atoms/Label';

describe('<Label />', () => {
  it('should render as expected', () => {
    const {toJSON} = render(<Label>Some label</Label>);

    expect(toJSON()).toMatchSnapshot();
  });
});
