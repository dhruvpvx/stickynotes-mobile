import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container, TextNoteCard} from '../../Copmponets';
import {Colors} from '../../res';

type Props = {};

const TextTab = (props: Props) => {
  return (
    <Container>
      <TextNoteCard />
      <TextNoteCard />
      <TextNoteCard />
      <TextNoteCard />
      <TextNoteCard />
    </Container>
  );
};

export default TextTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});
