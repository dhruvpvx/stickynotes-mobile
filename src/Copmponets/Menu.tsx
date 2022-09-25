import {
  Dimensions,
  Modal,
  StyleSheet,
  Animated,
  Platform,
  Pressable,
} from 'react-native';
import React, {forwardRef, useImperativeHandle} from 'react';
import MenuButton from './MenuButton';
import {useEffect} from 'react';

type Props = {
  visible: boolean;
  onPress: () => void;
  hide: () => void;
};

const {width, height} = Dimensions.get('window');

const Menu = forwardRef((props: Props, ref: any) => {
  const [cordinates, setCordinates] = React.useState({x: 0, y: 0});
  const [isVisible, setIsVisible] = React.useState(props.visible);
  const scaleRef = React.useRef(new Animated.Value(0)).current;
  useImperativeHandle(ref, () => ({
    measure: (x: number, y: number) => {
      setCordinates({x: x - width * 0.2, y});
    },
  }));

  const viewStyles = {
    ...styles.menuContainer,
    transform: [
      {translateX: cordinates.x},
      {translateY: cordinates.y},
      {scale: scaleRef},
    ],
  };

  useEffect(() => {
    if (props.visible) {
      setIsVisible(true);
      Animated.spring(scaleRef, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(scaleRef, {
        toValue: 0,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) {
          setIsVisible(false);
        }
      });
    }
  }, [props.visible]);

  return (
    <Modal visible={isVisible} style={styles.modal} transparent>
      <Pressable onPressOut={props.hide} style={styles.modal}>
        <Animated.View style={viewStyles}>
          <MenuButton title="Edit" icon="editIcon" />
          <MenuButton title="Share" icon="shareIcon" />
          <MenuButton title="Delete" icon="deleteIcon" />
        </Animated.View>
      </Pressable>
    </Modal>
  );
});

export default Menu;

Menu.defaultProps = {
  visible: false,
  onPress: () => null,
  hide: () => null,
};

const styles = StyleSheet.create({
  btnTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  modal: {
    width,
    height,
  },
  menuContainer: {
    width: width * 0.28,
    height: height * 0.15,
    paddingVertical: '2%',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});
