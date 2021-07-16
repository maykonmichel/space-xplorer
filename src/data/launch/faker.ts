import faker from 'faker';
import {repeat} from 'ramda';

import {Launch} from '~/data/launch';

export const fakerFlickrImages = (): Launch['links']['flickr_images'] =>
  repeat(faker.image.image(), faker.datatype.number({min: 1, max: 5}));

export const fakerLaunch = (): Launch => ({
  id: faker.datatype.number().toString(),
  mission_name: faker.random.words(),
  launch_date_local: faker.date.past().toLocaleDateString(),
  links: {
    article_link: faker.internet.url(),
    flickr_images: fakerFlickrImages(),
  },
  rocket: {
    rocket_name: faker.random.words(),
  },
});
