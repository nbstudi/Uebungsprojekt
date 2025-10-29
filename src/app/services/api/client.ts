import Constants from "expo-constants";

export const API_BASE_URL =
  Constants.expoConfig?.extra?.apiUrl ||
  process.env.EXPO_PUBLIC_API_URL ||
  "http://localhost:3000/api";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
interface ApiOptions {
  body?: any;
  headers?: Record<string, string>;
  auth?: boolean;
  timeoutMs?: number;
}

export async function api<T>(
  endpoint: string,
  method: HttpMethod = "GET",
  options: ApiOptions = {},
): Promise<T> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), options.timeoutMs ?? 10000);

  const token = options.auth ? await getToken() : undefined;

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal,
    });

    clearTimeout(id);

    if (!res.ok)
      throw new Error(`API error ${res.status}: ${await res.text()}`);
    return (await res.json()) as T;
  } catch (err: any) {
    if (err.name === "AbortError") throw new Error("Request timeout");
    throw err;
  }
}

async function getToken(): Promise<string | undefined> {
  // Platzhalter für echten SecureStore-Zugriff
  return undefined;
}
