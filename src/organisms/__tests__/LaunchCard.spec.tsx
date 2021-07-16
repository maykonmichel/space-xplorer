import {MockedProvider} from '@apollo/client/testing';
import {fireEvent, render} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

import cache from '~/data/cache';
import {fakerLaunch} from '~/data/launch/faker';
import LaunchCard, {Props} from '~/organisms/LaunchCard';
import {LAUNCH} from '~/screens';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({
      navigate: mockedNavigate,
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

  it('should show launch date', async () => {
    const props = getProps();
    const {getByA11yLabel} = getSut(props);

    const {launch_date_local} = props;

    expect(getByA11yLabel('Launch date').props.children).toBe(
      launch_date_local,
    );
  });

  it('should show first image of flickr if exists', async () => {
    const props = getProps();
    const {getByA11yLabel} = getSut(props);

    const {
      links: {
        flickr_images: [uri],
      },
    } = props;

    expect(getByA11yLabel('Launch image').props.source.uri).toBe(uri);
  });

  it('should navigate to launch screen on tap', async () => {
    const props = getProps();
    const {getByA11yLabel} = getSut(props);

    const launchCard = getByA11yLabel('Launch card');

    fireEvent.press(launchCard);

    const {id} = props;

    expect(mockedNavigate).toBeCalledWith(LAUNCH, {id});
  });
});
