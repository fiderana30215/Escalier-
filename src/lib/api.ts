export async function postToBackend(path: string, payload: unknown): Promise<void> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Envoi refusé (${response.status})`);
  }
}
