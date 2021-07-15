import {gql, useQuery} from '@apollo/client';

type LaunchLinks = {
  article_link: string;
  flickr_images: string[];
};

type LaunchRocket = {
  rocket_name: string;
};

export type Launch = {
  id: string;
  mission_name: string;
  launch_date_local: string;
  links: LaunchLinks;
  rocket: LaunchRocket;
};

const QUERY = gql`
  query ($id: ID!) {
    launch(id: $id) {
      id
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;

type Data = {
  launch: Launch;
};

type Variables = {
  id: string;
};

export const useLaunchQuery = (id: string) =>
  useQuery<Data, Variables>(QUERY, {variables: {id}});
