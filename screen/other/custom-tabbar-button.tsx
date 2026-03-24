import { View, StyleSheet } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React from 'react';

export const CustomTabBarButton = ({ children, onPress, accessibilityState }: BottomTabBarButtonProps) => {
  const focused = accessibilityState?.selected ?? false;

  return (
    <View
      style={styles.middleButtonWrapper}
      onStartShouldSetResponder={() => true}
      onResponderRelease={onPress} // handle press like a normal tab
    >
      <View style={[styles.middleButtonInner, { backgroundColor: focused ? '#007AFF' : '#ccc' }]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  middleButtonWrapper: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleButtonInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});