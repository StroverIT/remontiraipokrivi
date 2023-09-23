export default async function newsLetterSend(data) {
  const { email } = data;

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  };

  const res = await fetch("/api/newsLetter/saveUser", options);

  return res.json();
}
