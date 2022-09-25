import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TypeTag from '../TypeTag';
import TitleBox from '../TitleBox';
import ThreeDot from '../ThreeDot';

const deviceWidth = Dimensions.get('window').width;

type Props = {
  type: string;
  title: string;
  content: string;
};

const TextNoteCard = ({type, title, content}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TypeTag type={type} />
        <ThreeDot />
      </View>
      <TitleBox title="Write A Story" />
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        </Text>
      </View>
    </View>
  );
};

export default TextNoteCard;

TextNoteCard.defaultProps = {
  type: '',
  title: '',
  content: '',
};

const styles = StyleSheet.create({
  container: {
    width: deviceWidth * 0.45,
    paddingBottom: '10%',
    marginBottom: '5%',
    padding: '2%',
    borderRadius: 15,
    backgroundColor: 'white',
  },
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
