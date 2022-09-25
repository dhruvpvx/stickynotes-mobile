import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  type: string;
};

const TypeTag = ({type}: Props) => {
  const {solid, opacity} = typeColor[type] || typeColor.Travel;
  const tagViewStyle = {
    ...styles.tag,
    backgroundColor: opacity,
  };
  const tagTextStyle = {
    ...styles.tagText,
    color: solid,
  };
  return (
    <View style={tagViewStyle}>
      <Text style={tagTextStyle}>{type}</Text>
    </View>
  );
};

export default TypeTag;
TypeTag.defaultProps = {
  type: '',
};

const styles = StyleSheet.create({
  tag: {
    paddingVertical: '3.5%',
    minWidth: 60,
    minHeight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '12%',
    borderRadius: 150,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

const typeColor: any = {
  Travel: {
    solid: 'rgb(255,165,0)',
    opacity: 'rgba(255,165,0, 0.1)',
  },
  Secret: {
    solid: 'rgb(255,0,0)',
    opacity: 'rgba(255,0,0, 0.1)',
  },
  Shopping: {
    solid: 'rgb(0,0,255)',
    opacity: 'rgba(0,0,255, 0.1)',
  },
  Office: {
    solid: 'rgb(255,0,255)',
    opacity: 'rgba(255,0,255, 0.1)',
  },
  Space: {
    solid: 'rgb(128,128,128)',
    opacity: 'rgba(128,128,128, 0.1)',
  },
  Holiday: {
    solid: 'rgb(0,0,0)',
    opacity: 'rgba(0,0,0, 0.1)',
  },
};
