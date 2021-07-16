import {useMainStackNavigation} from '~/navigators/MainStack';
import {LAUNCH} from '~/screens';

export default (id: string) => {
  const {navigate} = useMainStackNavigation();

  const onPress = () => navigate(LAUNCH, {id});

  return {
    onPress,
  };
};
