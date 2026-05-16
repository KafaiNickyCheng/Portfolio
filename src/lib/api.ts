import type { ContactPayload, ApiResponse } from "@/types/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? "";

export async function sendContactEmail(payload: ContactPayload): Promise<ApiResponse> {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key":    API_KEY,
    },
    body: JSON.stringify(payload),
  });

  const data: ApiResponse = await res.json();

  if (!res.ok) {
    throw {
      status:  res.status,
      message: data.error ?? "Something went wrong.",
    };
  }

  return data;
}