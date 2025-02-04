import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/app-example/components/HelloWave';
import ParallaxScrollView from '@/app-example/components/ParallaxScrollView';
import { ThemedText } from '@/app-example/components/ThemedText';
import { ThemedView } from '@/app-example/components/ThemedView';

export default function HomerScreen() {
  return (
    <View>
      <ThemedText type="title">Welcomes!</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
