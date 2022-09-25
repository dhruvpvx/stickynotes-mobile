import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppImages} from '../res';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const AddNoteButton = (props: Props) => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      setCurrentIndex(e?.data?.state?.index || 0);
    });
    return unsubscribe;
  }, [navigation]);

  const onPress = () => {
    switch (currentIndex) {
      case 0:
        console.warn('Text');
        break;
      case 1:
        console.warn('Voice');
        break;
      case 2:
        console.warn('Photo');
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={AppImages.whilePlus} style={styles.plusIcon} />
    </TouchableOpacity>
  );
};

export default AddNoteButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '7.5%',
    right: '6.5%',
    width: '16%',
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  plusIcon: {
    width: '100%',
    height: '100%',
  },
});
