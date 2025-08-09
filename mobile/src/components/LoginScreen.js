import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [crewId, setCrewId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For proof-of-concept, skip actual authentication
    // In production, integrate with Cognito
    navigation.navigate('RosterCheck', { crewId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crew Check-In</Text>
      <TextInput
        style={styles.input}
        placeholder="Crew ID"
        value={crewId}
        onChangeText={setCrewId}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} disabled={!crewId || !password} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
  input: { width: 200, height: 40, borderWidth: 1, borderColor: '#ccc', marginBottom: 12, paddingHorizontal: 8 }
});
