import {render} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

import LaunchImage, {Props} from '~/molecules/LaunchImage';

const getProps = (): Props => ({
  uri: faker.image.imageUrl(),
  onPress: jest.fn(),
});

describe('<LaunchImage />', () => {
  it('should render as expected', () => {
    const props = getProps();
    const {toJSON} = render(<LaunchImage {...props} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
