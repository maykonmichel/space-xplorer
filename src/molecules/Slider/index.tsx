import React, {FC} from 'react';
import {FlatList, Image, ListRenderItem} from 'react-native';

const keyExtractor = (uri: string) => uri;

const renderItem: ListRenderItem<string> = ({item}) => (
  <Image source={{uri: item}} style={{width: 200, height: 100}} />
);

type Props = {
  data: string[];
};

const Slider: FC<Props> = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
    />
  );
};

export default Slider;
