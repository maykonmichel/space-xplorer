import LottieView from 'lottie-react-native';
import {useEffect, useRef} from 'react';

export default (favorite: boolean) => {
  const firstTime = useRef(true);
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    const [begin, end] = favorite ? [22, 50] : [0, 20];
    const start = firstTime.current ? end : begin;

    animation.current?.play(start, end);
    firstTime.current = false;
  }, [favorite]);

  return animation;
};
