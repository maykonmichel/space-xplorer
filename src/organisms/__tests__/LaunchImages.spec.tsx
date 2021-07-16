import {MockedProvider} from '@apollo/client/testing';
import {render} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

import cache, {initializeCache} from '~/data/cache';
import LaunchImages, {Props} from '~/organisms/LaunchImages';

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
});
