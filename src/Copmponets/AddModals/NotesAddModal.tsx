import {Animated, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddTextNote from './AddTextNote';
import {Colors} from '../../res';

type Props = {};

const NotesAddModal = (props: Props) => {
  const animStyle = {
    transform: [],
  };

  return (
    <Modal style={styles.modal} visible transparent>
      <Pressable style={styles.mainContainer}>
        <Animated.View style={animStyle}>
          <AddTextNote />
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export default NotesAddModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.MODAL_BG,
  },
  container: {
    width: '80%',
    aspectRatio: 1,
    backgroundColor: 'white',
  },
  modal: {
    flex: 1,
  },
});
