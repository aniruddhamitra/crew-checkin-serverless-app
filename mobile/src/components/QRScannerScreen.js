import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// For Expo, use expo-barcode-scanner. For RN CLI, use react-native-camera
import { BarCodeScanner } from 'expo-barcode-scanner';
import { validateQRCode } from '../api/qrValidation';

export default function QRScannerScreen({ route, navigation }) {
  const { crewId } = route.params;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    try {
      const qrData = JSON.parse(data);
      const response = await validateQRCode(crewId, qrData);
      setScanResult(response);
      navigation.navigate('StatusScreen', { result: response });
    } catch (e) {
      setScanResult({ checkedIn: false, error: 'Invalid QR' });
      navigation.navigate('StatusScreen', { result: { checkedIn: false, error: 'Invalid QR' } });
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR to Check-In</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ width: 300, height: 300 }}
      />
      {scanned && <Button title="Scan Again" onPress={() => setScanned(false)} />}
      {scanResult && <Text>{scanResult.checkedIn ? 'Check-in Successful!' : 'Check-in Failed.'}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 }
});