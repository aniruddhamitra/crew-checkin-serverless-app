export async function checkTrainingMedical(crewId) {
  // Replace <api-url> with your API Gateway endpoint
  const res = await fetch(`https://<api-url>/checkTrainingMedical?crewId=${crewId}`);
  return await res.json();
}
