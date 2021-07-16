import {MockedProvider} from '@apollo/client/testing';
import {render} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

import cache from '~/data/cache';
import {fakerLaunch} from '~/data/launch/faker';
import LaunchCard, {Props} from '~/organisms/LaunchCard';

jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({
      dispatch: jest.fn(),
    }),
  };
});

const getProps = (): Props => fakerLaunch();

const getSut = (props: Props) =>
  render(
    <MockedProvider cache={cache}>
      <LaunchCard {...props} />
    </MockedProvider>,
  );

describe('<LaunchCard />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should render as expected', async () => {
    const props = getProps();
    const {toJSON} = getSut({
      ...props,
      mission_name: 'mission name',
      launch_date_local: '01/01/1998',
      links: {
        ...props.links,
        flickr_images: [faker.image.imageUrl()],
      },
    });

    expect(toJSON()).toMatchSnapshot();
  });

  it('should show launch name', async () => {
    const props = getProps();
    const {getByA11yLabel} = getSut(props);

    const {mission_name} = props;

    expect(getByA11yLabel('Launch name').props.children).toBe(mission_name);
  });
});
