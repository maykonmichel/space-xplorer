import faker from 'faker';
import {repeat} from 'ramda';

import {Launch} from '~/data/launch';

export const fakerFlickrImages = (): Launch['links']['flickr_images'] =>
  repeat(faker.image.image(), faker.datatype.number({min: 1, max: 5}));
