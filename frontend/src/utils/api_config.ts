const API_URL = import.meta.env.VITE_API_URL;

type RequestOptions = RequestInit & {
  body?: unknown;
};

export async function apiFetch<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,
      headers,
      credentials: "include",
      body: options.body
        ? JSON.stringify(options.body)
        : undefined,
    }
  );

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}