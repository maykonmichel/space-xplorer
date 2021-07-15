import React, {FC} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Launch} from '~/data/launch';
import {useLaunchesQuery} from '~/data/launch/launches';
import LaunchCard from '~/molecules/LaunchCard';

const keyExtractor = ({id}: Launch) => id;

const renderItem: ListRenderItem<Launch> = ({item}) => <LaunchCard {...item} />;

const Launches: FC = () => {
  const {data} = useLaunchesQuery();

  if (!data) return null;

  const {launchesPast} = data;

  return (
    <FlatList
      data={launchesPast}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default Launches;
