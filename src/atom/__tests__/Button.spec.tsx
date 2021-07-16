import {render} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

import Button, {Props} from '~/atom/Button';

const getProps = (): Props => ({
  title: faker.lorem.words(),
  onPress: jest.fn(),
});

describe('<Button />', () => {
  it('should render as expected', () => {
    const props = getProps();
    const {toJSON} = render(<Button {...props} title={'Test button'} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
