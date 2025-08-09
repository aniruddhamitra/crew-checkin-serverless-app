import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { checkTrainingMedical } from '../api/trainingMedical';

export default function TrainingMedicalScreen({ route, navigation }) {
  const { crewId } = route.params;
  const [loading, setLoading] = useState(true);
  const [training, setTraining] = useState(false);
  const [medical, setMedical] = useState(false);

  useEffect(() => {
    async function fetchStatus() {
      setLoading(true);
      const res = await checkTrainingMedical(crewId);
      setTraining(res.training);
      setMedical(res.medical);
      setLoading(false);
    }
    fetchStatus();
  }, []);

  const handleNext = () => {
    navigation.navigate('QRScanner', { crewId });
  };

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mandatory Checks</Text>
      <Text>Training: {training ? '✔ Completed' : '✗ Not completed'}</Text>
      <Text>Medical: {medical ? '✔ Valid' : '✗ Expired/Invalid'}</Text>
      <Button title="Next" onPress={handleNext} disabled={!(training && medical)} />
      {!(training && medical) && <Text style={styles.error}>All checks must be valid to proceed.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  error: { color: 'red', marginTop: 10 }
});