import {MockedProvider} from '@apollo/client/testing';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

import cache, {initializeCache} from '~/data/cache';
import {readFavoriteImages, writeFavoriteImages} from '~/data/favoriteImages';
import {fakerFlickrImages} from '~/data/launch/faker';
import LaunchImages, {Props} from '~/organisms/LaunchImages';

const getProps = (): Props => ({
  data: fakerFlickrImages(),
});

const getSut = (props: Props) =>
  render(
    <MockedProvider cache={cache}>
      <LaunchImages {...props} />
    </MockedProvider>,
  );

describe('<LaunchImages />', () => {
  beforeEach(() => {
    initializeCache();
  });

  it('should render as expected', async () => {
    const data = [faker.image.imageUrl()];
    const {toJSON} = getSut({data});

    expect(toJSON()).toMatchSnapshot();
  });

  it('should show at most 3 images', async () => {
    const props = getProps();
    const {queryAllByA11yRole} = getSut(props);

    const images = queryAllByA11yRole('image');

    expect(images.length).toBeLessThanOrEqual(3);
  });

  it('should add favorite image on tap button', async () => {
    const props = getProps();
    const {getAllByA11yRole} = getSut(props);

    const [button] = getAllByA11yRole('button');

    fireEvent.press(button);

    await waitFor(() => {});

    const {
      data: [uri],
    } = props;

    expect(readFavoriteImages(cache)).toStrictEqual({
      favoriteImages: [uri],
    });
  });

  it('should remove favorite image on tap button of favorite image', async () => {
    const props = getProps();

    writeFavoriteImages(cache, props.data.slice(0, 1));

    const {getAllByA11yRole} = getSut(props);

    const [button] = getAllByA11yRole('button');

    fireEvent.press(button);

    await waitFor(() => {});

    expect(readFavoriteImages(cache)).toStrictEqual({
      favoriteImages: [],
    });
  });
});
