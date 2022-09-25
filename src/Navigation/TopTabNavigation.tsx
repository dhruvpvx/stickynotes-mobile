import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabBars from './TabBars';
import MyTabBar from './MyTabBar';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={(props: any) => <MyTabBar {...props} />}>
      <Tab.Screen name="TEXT" component={TabBars.TextTab} />
      <Tab.Screen name="VOICE" component={TabBars.VoiceTab} />
      <Tab.Screen name="PHOTO" component={TabBars.PhotoTab} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({});
