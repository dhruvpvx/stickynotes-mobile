import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container, PhotoNoteCard} from '../../Copmponets';

type Props = {};

const PhotoTab = (props: Props) => {
  return (
    <Container>
      <PhotoNoteCard />
      <PhotoNoteCard />
      <PhotoNoteCard />
      <PhotoNoteCard />
      <PhotoNoteCard />
    </Container>
  );
};

export default PhotoTab;

const styles = StyleSheet.create({});
