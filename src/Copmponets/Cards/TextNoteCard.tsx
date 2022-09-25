import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TypeTag from '../TypeTag';
import TitleBox from '../TitleBox';
import ThreeDot from '../ThreeDot';
import {AppStyles} from '../../res';

type Props = {
  type: string;
  title: string;
  content: string;
};

const TextNoteCard = ({type, title, content}: Props) => {
  return (
    <View style={AppStyles.cardStyle}>
      <View style={styles.header}>
        <TypeTag type={type} />
        <ThreeDot />
      </View>
      <TitleBox title="Write A Story" />
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
