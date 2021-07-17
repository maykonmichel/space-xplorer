import {fireEvent, render} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

import LaunchImage, {Props} from '~/molecules/LaunchImage';

const getProps = (): Props => ({
  uri: faker.image.imageUrl(),
  onPress: jest.fn(),
  favorite: faker.datatype.boolean(),
});

describe('<LaunchImage />', () => {
  it('should render as expected', () => {
    const props = getProps();
    const {toJSON} = render(<LaunchImage {...props} favorite={false} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render favorite as expected', () => {
    const props = getProps();
    const {toJSON} = render(<LaunchImage {...props} favorite={true} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should call onPress prop with uri arg on tap button', () => {
    const props = getProps();
    const {uri, onPress} = props;
    const {getByA11yRole} = render(<LaunchImage {...props} />);

    const button = getByA11yRole('button');

    fireEvent.press(button);

    expect(onPress).toBeCalledWith(uri);
  });
});
