import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { checkRoster } from '../api/roster';

export default function RosterCheckScreen({ route, navigation }) {
  const { crewId } = route.params;
  const [loading, setLoading] = useState(true);
  const [duty, setDuty] = useState('');
  const [validDuty, setValidDuty] = useState(false);

  useEffect(() => {
    async function fetchRoster() {
      setLoading(true);
      const res = await checkRoster(crewId);
      setDuty(res.duty || 'No duty assigned');
      setValidDuty(res.validDuty);
      setLoading(false);
    }
    fetchRoster();
  }, []);

  const handleNext = () => {
    navigation.navigate('TrainingMedical', { crewId });
  };

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roster Status</Text>
      <Text>{duty}</Text>
      <Button title="Next" onPress={handleNext} disabled={!validDuty} />
      {!validDuty && <Text style={styles.error}>You have no valid duty today.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  error: { color: 'red', marginTop: 10 }
});
