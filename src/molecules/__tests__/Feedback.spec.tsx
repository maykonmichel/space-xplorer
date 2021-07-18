import {render} from '@testing-library/react-native';
import React from 'react';

import Feedback from '~/molecules/Feedback';

jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({
      dispatch: jest.fn(),
    }),
  };
});

describe('<Feedback />', () => {
  it('should render empty as expected', () => {
    const {toJSON} = render(<Feedback type={'empty'} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
