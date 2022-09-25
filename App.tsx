import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {AddNoteButton, Header} from './src/Copmponets';
import TopTabNavigation from './src/Navigation/TopTabNavigation';
import {Colors} from './src/res';
import {fetchNotes} from './src/Redux/Slices/NotesSlice';
import {useAppDispatch} from './src/Redux/store';

type Props = {};

const App = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Sticky Notes" />
      <TopTabNavigation />
      <AddNoteButton />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});
