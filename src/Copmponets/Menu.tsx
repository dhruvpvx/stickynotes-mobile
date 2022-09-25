import {Dimensions, StyleSheet, Animated, Platform} from 'react-native';
import React, {forwardRef, useImperativeHandle} from 'react';
import MenuButton from './MenuButton';
import AnimatedModal from './Modal/AnimatedModal';

type Props = {
  cordinates: {x: number; y: number};
};

const {width, height} = Dimensions.get('window');

const Menu = forwardRef((props: Props, ref: any) => {
  const modalRef = React.useRef<any>(null);
  useImperativeHandle(ref, () => ({
    show: () => {
      modalRef.current?.showModal();
    },
    hide: () => {
      modalRef.current?.hideModal();
    },
  }));

  const viewStyles = {
    ...styles.menuContainer,
    transform: [
      {translateX: props.cordinates.x},
      {translateY: props.cordinates.y},
    ],
  };

  return (
    <AnimatedModal ref={modalRef} viewStyles={viewStyles}>
      <MenuButton title="Edit" icon="editIcon" />
      <MenuButton title="Share" icon="shareIcon" />
      <MenuButton title="Delete" icon="deleteIcon" />
    </AnimatedModal>
  );
});

export default Menu;

const styles = StyleSheet.create({
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
