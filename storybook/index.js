import {addDecorator, configure, getStorybookUI} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

import {loadStories} from './storyLoader';

import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
