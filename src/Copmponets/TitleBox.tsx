import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ThreeDot from './ThreeDot';

type Props = {
  title: string;
  showDots: boolean;
};

const TitleBox = (props: Props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.title}</Text>
      {props.showDots && <ThreeDot />}
    </View>
  );
};

export default TitleBox;

TitleBox.defaultProps = {
  title: '',
  showDots: false,
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    paddingBottom: '5%',
    paddingLeft: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    flexWrap: 'wrap',
  },
});
