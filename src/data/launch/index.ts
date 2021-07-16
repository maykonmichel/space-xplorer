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
  details: string;
  launch_date_formatted: string;
  links: LaunchLinks;
  mission_name: string;
  rocket: LaunchRocket;
};

const QUERY = gql`
  query ($id: ID!) {
    launch(id: $id) {
      id
      details
      launch_date_formatted @client
      links {
        article_link
        flickr_images
      }
      mission_name
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
