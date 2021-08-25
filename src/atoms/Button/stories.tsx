import {action} from '@storybook/addon-actions';
import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';

import Button from '.';

storiesOf('Button', module).add('sandbox', () => (
  <Button
    title={text('title', 'Title')}
    onPress={action('clicked-text')}
    color={select('color', ['primary', 'secondary', 'light'], 'primary')}
    variant={select('variant', ['outlined', 'text'], 'outlined')}
  />
));
