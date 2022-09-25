import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppImages, Colors } from '../res'

type Props = {
  title: string
}


const Header = ({title }: Props) => {
  return (
    <View style={styles.container} >
      <Text style={styles.titleText} >{title}</Text>
      <TouchableOpacity style={styles.searchIconView} >
        <Image source={AppImages.searchIcon} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

Header.defaultProps = {
  title: ''
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 6.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '3%',
    backgroundColor: Colors.WHITE
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  searchIcon: {
    width: '35%',
    height: undefined,
    aspectRatio: 1,
  },
  searchIconView: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }

})