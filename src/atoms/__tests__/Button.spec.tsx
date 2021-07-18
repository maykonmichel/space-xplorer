import {fireEvent, render} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

import Button from '~/atoms/Button';
import {Props} from '~/atoms/Button/types';

const getProps = (): Props => ({
  title: faker.lorem.words(),
  onPress: jest.fn(),
});

describe('<Button />', () => {
  it('should render default as expected', () => {
    const props = getProps();
    const {toJSON} = render(<Button {...props} title={'Test button'} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should show title', () => {
    const props = getProps();
    const {queryByText} = render(<Button {...props} />);

    const {title} = props;

    expect(queryByText(title)).toBeTruthy();
  });

  it('should emit press event', () => {
    const props = getProps();
    const {getByRole} = render(<Button {...props} />);

    const button = getByRole('button');

    fireEvent.press(button);

    const {onPress} = props;

    expect(onPress).toBeCalled();
  });
});
