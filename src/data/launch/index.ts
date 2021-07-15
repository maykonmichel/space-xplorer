type LaunchLinks = {
  flickr_images: string[];
};

export type Launch = {
  id: string;
  mission_name: string;
  launch_date_local: string;
  links: LaunchLinks;
};
