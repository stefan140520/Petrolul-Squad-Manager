// Toate cererile HTTP stau aici; componentele nu apelează fetch direct.
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

export function fetchJucatori() {
  return request("/jucatori");
}

export function fetchJucator(id) {
  return request(`/jucatori/${id}`);
}

export function createJucator(jucator) {
  return request("/jucatori", {
    method: "POST",
    body: JSON.stringify(jucator),
  });
}

export function updateJucator(id, changes) {
  return request(`/jucatori/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteJucator(id) {
  return request(`/jucatori/${id}`, {
    method: "DELETE",
  });
}