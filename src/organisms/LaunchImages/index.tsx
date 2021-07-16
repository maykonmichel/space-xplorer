import React, {FC} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import LaunchImage from '~/molecules/LaunchImage';

import useLaunchImages from './useLaunchImages';

const keyExtractor = (uri: string, index: number) => `${uri}_${index}`;

export type Props = {
  data: string[];
};

const LaunchImages: FC<Props> = ({data}) => {
  const {slice, toggleFavorite} = useLaunchImages(data);

  const renderItem: ListRenderItem<string> = ({item}) => (
    <LaunchImage uri={item} onPress={toggleFavorite} />
  );

  return (
    <FlatList
      data={slice}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
    />
  );
};

export default LaunchImages;
