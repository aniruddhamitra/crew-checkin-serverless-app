export async function checkRoster(crewId) {
  // Replace <api-url> with your API Gateway endpoint
  const res = await fetch(`https://<api-url>/checkRoster?crewId=${crewId}`);
  return await res.json();
}