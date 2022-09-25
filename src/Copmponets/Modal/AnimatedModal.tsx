import {Modal, Animated, Pressable} from 'react-native';
import React, {forwardRef, useImperativeHandle} from 'react';
import {Colors} from '../../res';

type Props = {
  children: React.ReactNode;
  viewStyles: any;
  fullScreen?: boolean;
};

const AnimatedModal = forwardRef((props: Props, ref: any) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const scaleRef = React.useRef(new Animated.Value(0)).current;
  const backgroundColor = props.fullScreen ? Colors.MODAL_BG : 'transparent';
  useImperativeHandle(ref, () => ({
    showModal,
    hideModal,
  }));

  const showModal = () => {
    setIsVisible(true);
    Animated.spring(scaleRef, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.spring(scaleRef, {
      toValue: 0,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        setIsVisible(false);
      }
    });
  };

  const viewStyles = {
    ...props.viewStyles,
  };
  viewStyles.transform = [
    ...viewStyles.transform,
    {
      scale: scaleRef,
    },
  ];

  return (
    <Modal visible={isVisible} transparent>
      <Pressable onPressOut={hideModal} style={{flex: 1, backgroundColor}}>
        <Animated.View style={viewStyles}>{props.children}</Animated.View>
      </Pressable>
    </Modal>
  );
});

export default AnimatedModal;
