import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppImages, Colors} from '../res';

type Props = {
  title: string;
  icon: string;
  onPress: () => void;
};

const {width} = Dimensions.get('window');

const MenuButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btnView}>
      <Image source={AppImages[props.icon]} style={styles.iconStyle} />
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MenuButton;

MenuButton.defaultProps = {
  title: '',
  icon: 'editIcon',
  onPress: null,
};

const styles = StyleSheet.create({
  btnView: {
    width: width * 0.2,
    aspectRatio: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.MENU_BTN,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 11,
    fontWeight: '500',
  },
  iconStyle: {
    width: width * 0.03,
    height: undefined,
    aspectRatio: 1,
    marginRight: '10%',
  },
});
