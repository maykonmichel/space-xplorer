import React, {FC} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {useFavoriteImages} from '~/data/favoriteImages';
import LaunchImage from '~/molecules/LaunchImage';

const keyExtractor = (uri: string) => uri;

type Props = {
  data: string[];
};

const LaunchImages: FC<Props> = ({data}) => {
  const {
    client: {cache},
    data: {favoriteImages = []} = {},
  } = useFavoriteImages();

  const toggleFavorite = (uri: string) =>
    cache.modify({
      fields: {
        favoriteImages: () =>
          favoriteImages.includes(uri)
            ? favoriteImages.filter(image => image !== uri)
            : [...favoriteImages, uri],
      },
    });

  const renderItem: ListRenderItem<string> = ({item}) => (
    <LaunchImage uri={item} onPress={toggleFavorite} />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
    />
  );
};

export default LaunchImages;
