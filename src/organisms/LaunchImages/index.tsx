import React, {FC} from 'react';
import {Dimensions, ListRenderItem} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import LaunchImage from '~/molecules/LaunchImage';

import styles from './styles';
import useLaunchImages from './useLaunchImages';

const keyExtractor = (uri: string, index: number) => `${uri}_${index}`;

const {width: sliderWidth} = Dimensions.get('window');
const itemWidth = sliderWidth * 0.8;

export type Props = {
  data: string[];
};

const LaunchImages: FC<Props> = ({data}) => {
  const {slice, toggleFavorite} = useLaunchImages(data);

  const renderItem: ListRenderItem<string> = ({item}) => (
    <LaunchImage uri={item} onPress={toggleFavorite} />
  );

  return (
    <Carousel
      data={slice}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      contentContainerCustomStyle={styles.container}
    />
  );
};

export default LaunchImages;
