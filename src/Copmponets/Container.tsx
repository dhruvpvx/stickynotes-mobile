import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../res'

type Props = {
  children: React.ReactNode,
  style: any
}

const Container = (props: Props) => {
  return (
    <View {...props} style={[styles.container, props.style]} >
      {props.children}
    </View>
  )
}

export default Container


Container.defaultProps = {
  style: {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  }
})