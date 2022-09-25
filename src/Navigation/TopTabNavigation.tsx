import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabBars from './TabBars';
import {NavigationContainer} from '@react-navigation/native';
import MyTabBar from './MyTabBar';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props: any) => <MyTabBar {...props} />}>
        <Tab.Screen name="TEXT" component={TabBars.TextTab} />
        <Tab.Screen name="VOICE" component={TabBars.VoiceTab} />
        <Tab.Screen name="PHOTO" component={TabBars.PhotoTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({});
