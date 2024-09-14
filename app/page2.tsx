import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
export default function Page() {
  return (
    <View style={styles.container}>
      <Text>page 2, só exemplo</Text>
      <Link href={'/'}> Ir para Home</Link>
      <Link href={'page3'}> Ir para Home</Link>
      <StatusBar style="auto" />
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