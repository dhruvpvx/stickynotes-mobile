import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {AppImages} from '../res';
import Menu from './Menu';

type Props = {};

const deviceWidth = Dimensions.get('window').width;

const ThreeDot = (props: Props) => {
  const dotRef = React.useRef<TouchableOpacity>(null);
  const [cordinates, setCordinates] = React.useState({x: 0, y: 0});
  const menuRef = React.useRef<any>(null);
  const handleXy = useCallback(() => {
    dotRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setCordinates({x: pageX - deviceWidth * 0.2, y: pageY});
    });
  }, []);

  useEffect(() => {
    const unsubscribe = DeviceEventEmitter.addListener('onScroll', e => {
      handleXy();
    });
    return () => {
      unsubscribe.remove();
    };
  }, []);

  return (
    <TouchableOpacity
      ref={dotRef}
      onLayout={handleXy}
      onPress={() => menuRef.current.show()}>
      <Image source={AppImages.threedDotIcon} style={styles.threeDot} />
      <Menu cordinates={cordinates} ref={menuRef} />
    </TouchableOpacity>
  );
};

export default ThreeDot;

const styles = StyleSheet.create({
  threeDot: {
    width: deviceWidth * 0.075,
    height: undefined,
    aspectRatio: 1,
  },
});
