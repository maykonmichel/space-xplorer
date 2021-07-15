import {gql, useQuery} from '@apollo/client';

import {Launch} from '~/data/launch';

const QUERY = gql`
  {
    launchesPast(limit: 10, sort: "launch_date_local") {
      id
      mission_name
      launch_date_local
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
