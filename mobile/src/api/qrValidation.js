export async function validateQRCode(crewId, qrData) {
  // Replace <api-url> with your API Gateway endpoint
  const res = await fetch(`https://<api-url>/validateQRCode`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ crewId, qrData }),
  });
  return await res.json();
}