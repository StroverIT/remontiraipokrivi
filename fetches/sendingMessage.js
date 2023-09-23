export default async function sendMesage(inputs) {
  // Message for sending
  const messageData = {
    title: `Ново съобщение от www.временно.bg`,
    email: inputs.email,
    description: inputs.message,
    fullName: inputs.name,
  };
  // Options for api sendind
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageData),
  };
  // Response from server
  const res = await fetch(`/api/sendEmailMessage`, options);
  return await res.json();
}
