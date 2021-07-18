import React, {FC} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Launch} from '~/data/launch';
import {useLaunchesQuery} from '~/data/launch/launches';
import Feedback from '~/molecules/Feedback';
import LaunchCard from '~/organisms/LaunchCard';

import styles from './styles';

const keyExtractor = ({id}: Launch) => id;

const renderItem: ListRenderItem<Launch> = ({item}) => <LaunchCard {...item} />;

const Launches: FC = () => {
  const {data: {launchesPast} = {}, error, loading} = useLaunchesQuery();

  if (loading) return <Feedback type={'loading'} />;

  if (error) return <Feedback type={'error'} />;

  if (!launchesPast) return <Feedback type={'empty'} />;

  return (
    <FlatList
      data={launchesPast}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default Launches;
