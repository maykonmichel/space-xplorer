import {gql, useQuery} from '@apollo/client';

import {Launch} from '~/data/launch';

const QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_formatted
      links {
        flickr_images
      }
    }
  }
`;

type Data = {
  launchesPast: Launch[];
};

export const useLaunchesQuery = () => useQuery<Data>(QUERY);
