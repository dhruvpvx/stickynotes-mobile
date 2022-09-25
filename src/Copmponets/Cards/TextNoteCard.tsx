import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TypeTag from '../TypeTag';
import TitleBox from '../TitleBox';
import ThreeDot from '../ThreeDot';
import {AppStyles} from '../../res';
import {noteType} from '../../Redux/Slices/NotesSlice';

const TextNoteCard = ({label, title, content}: noteType) => {
  return (
    <View style={AppStyles.cardStyle}>
      <View style={styles.header}>
        <TypeTag type={label} />
        <ThreeDot />
      </View>
      <TitleBox title={title} />
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </View>
  );
};

export default TextNoteCard;

TextNoteCard.defaultProps = {
  type: '',
  title: '',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: '5%',
  },
  contentText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  header: {
    width: '100%',
    aspectRatio: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '3%',
    flexDirection: 'row',
  },
});
