import {DeviceEventEmitter, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../res';

type Props = {
  children: React.ReactNode;
  style: any;
};

const Container = (props: Props) => {
  const onScroll = (e: any) => {
    DeviceEventEmitter.emit('onScroll', e);
  };

  return (
    <ScrollView
      onScroll={onScroll}
      {...props}
      contentContainerStyle={styles.contentContainerStyle}
      style={[styles.container, props.style]}>
      {props.children}
    </ScrollView>
  );
};

export default Container;

Container.defaultProps = {
  style: {},
};

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
