import { StyleSheet, Text, View } from 'react-native';

import * as ExpoRedsys from 'expo-redsys';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoRedsys.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
