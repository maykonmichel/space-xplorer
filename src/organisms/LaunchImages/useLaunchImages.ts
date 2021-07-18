import {useFavoriteImages} from '~/data/favoriteImages';

const MAX = 3;

export default (data: string[]) => {
  const {
    client: {cache},
    data: {favoriteImages = []} = {},
  } = useFavoriteImages();

  const isFavorite = (uri: string) => favoriteImages.includes(uri);

  const toggleFavorite = (uri: string) =>
    cache.modify({
      fields: {
        favoriteImages: () =>
          isFavorite(uri)
            ? favoriteImages.filter(image => image !== uri)
            : [...favoriteImages, uri],
      },
    });

  const slice = data.slice(0, MAX);

  return {
    isFavorite,
    slice,
    toggleFavorite,
  };
};
