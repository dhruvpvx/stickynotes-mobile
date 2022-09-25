import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppStyles} from '../../res';
import TitleBox from '../TitleBox';
import TypeTag from '../TypeTag';

type Props = {};

const PhotoNoteCard = (props: Props) => {
  return (
    <View style={styles.cardStyle}>
      <TitleBox title="Testing" showDots />
      <TypeTag type="Space" />
      <Image
        source={{uri: 'https://placeimg.com/640/480/any'}}
        style={styles.image}
      />
    </View>
  );
};

export default PhotoNoteCard;

const styles = StyleSheet.create({
  cardStyle: {
    ...AppStyles.cardStyle,
    alignItems: 'flex-start',
    paddingBottom: 0,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
    marginTop: '7%',
    marginVertical: '5%',
  },
});
