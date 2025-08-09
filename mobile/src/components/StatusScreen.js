import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StatusScreen({ route, navigation }) {
  const { result } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check-in Status</Text>
      {result.checkedIn ? (
        <Text style={styles.success}>✔ Success! You are checked in.</Text>
      ) : (
        <Text style={styles.error}>✗ Failed: {result.error || 'Unknown error'}</Text>
      )}
      <Button title="Back to Home" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  success: { color: 'green', fontSize: 18 },
  error: { color: 'red', fontSize: 18 }
});
