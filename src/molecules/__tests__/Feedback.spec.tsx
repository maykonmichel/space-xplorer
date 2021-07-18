import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import Feedback from '~/molecules/Feedback';

const mockedGoBack = jest.fn();
const mockedCanGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({
      goBack: mockedGoBack,
      canGoBack: mockedCanGoBack,
      dispatch: jest.fn(),
    }),
  };
});

describe('<Feedback />', () => {
  it('should render loading as expected', () => {
    const {toJSON} = render(<Feedback type={'loading'} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render empty as expected', () => {
    const {toJSON} = render(<Feedback type={'empty'} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render error without button as expected', () => {
    const {toJSON} = render(<Feedback type={'error'} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render error with button as expected', () => {
    mockedCanGoBack.mockImplementationOnce(() => true);

    const {toJSON} = render(<Feedback type={'error'} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should go back on press error button', () => {
    mockedCanGoBack.mockImplementationOnce(() => true);

    const {getByA11yLabel} = render(<Feedback type={'error'} />);

    const button = getByA11yLabel('Go back');

    fireEvent.press(button);

    expect(mockedGoBack).toBeCalled();
  });
});
