import {Animated, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../res';

const MyTabBar = ({state, descriptors, navigation, position}: any) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_: any, i: number) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i: number) => (i === index ? 1 : 0.5)),
        });

        const bottomSep = {
          ...styles.bottomSep,
          transform: [
            {
              scale: position.interpolate({
                inputRange,
                outputRange: inputRange.map((i: number) =>
                  i === index ? 1 : 0,
                ),
              }),
            },
          ],
        };

        const nameStyle = {
          opacity,
          fontWeight: '600',
          transform: [
            {
              scale: position.interpolate({
                inputRange,
                outputRange: inputRange.map((i: number) =>
                  i === index ? 1 : 0.95,
                ),
              }),
            },
          ],
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBtn}>
            <Animated.Text style={nameStyle}>{route.name}</Animated.Text>
            <Animated.View style={bottomSep} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  tabBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    width: '100%',
    aspectRatio: 5,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bottomSep: {
    width: '16%',
    position: 'absolute',
    bottom: '25%',
    height: 3,
    borderRadius: 10,
    backgroundColor: Colors.TAB_SEP,
  },
});
