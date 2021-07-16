import React, {FC} from 'react';
import {FlatList, Image, ListRenderItem, TouchableOpacity} from 'react-native';

import {useFavoriteImages} from '~/data/favoriteImages';

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
    <TouchableOpacity onPress={() => toggleFavorite(item)}>
      <Image source={{uri: item}} style={{width: 200, height: 100}} />
    </TouchableOpacity>
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
