import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from './src/Copmponets'
import TopTabNavigation from './src/Navigation/TopTabNavigation'
import { Colors } from './src/res'

type Props = {}

const App = (props: Props) => {
  return (

    <SafeAreaView style={styles.container}>
      <Header title='My Sticky Notes'/>
      <TopTabNavigation />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  }
})