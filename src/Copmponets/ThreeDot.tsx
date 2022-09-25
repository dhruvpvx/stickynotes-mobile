import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppImages} from '../res';
import Menu from './Menu';

type Props = {};

const {width} = Dimensions.get('window');

const ThreeDot = (props: Props) => {
  const [visible, setVisible] = React.useState(false);
  const dotRef = React.useRef<TouchableOpacity>(null);
  const menuRef = React.useRef<any>(null);

  const handleXy = () => {
    dotRef.current?.measure((x, y, width, height, pageX, pageY) => {
      menuRef.current?.measure(pageX, pageY);
    });
  };

  return (
    <TouchableOpacity
      ref={dotRef}
      onLayout={handleXy}
      onPress={() => setVisible(p => !p)}>
      <Image source={AppImages.threedDotIcon} style={styles.threeDot} />
      <Menu
        ref={menuRef}
        visible={visible}
        onPress={() => null}
        hide={() => setVisible(false)}
      />
    </TouchableOpacity>
  );
};

export default ThreeDot;

const styles = StyleSheet.create({
  threeDot: {
    width: width * 0.075,
    height: undefined,
    aspectRatio: 1,
  },
});
