import AsyncStorage from '@react-native-async-storage/async-storage';
import {withKnobs} from '@storybook/addon-knobs';
import {addDecorator, configure, getStorybookUI} from '@storybook/react-native';

import './rn-addons';

import {loadStories} from './storyLoader';

addDecorator(withKnobs);

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
});

export default StorybookUIRoot;
