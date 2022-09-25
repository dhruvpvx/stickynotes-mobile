import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container, TextNoteCard} from '../../Copmponets';
import {Colors} from '../../res';

type Props = {};

const TextTab = (props: Props) => {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}>
      <TextNoteCard />
      <TextNoteCard />
      <TextNoteCard />
      <TextNoteCard />
      <TextNoteCard />
    </ScrollView>
  );
};

export default TextTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  contentContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3%',
  },
});
