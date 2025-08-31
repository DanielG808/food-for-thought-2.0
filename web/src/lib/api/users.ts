export async function ensureUserInDb(): Promise<boolean> {
  try {
    const res = await fetch("/api/users/ensure", {
      method: "POST",
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("Failed to ensure user in DB:", await res.text());
      return false;
    }
    return true;
  } catch (e) {
    console.error("Error calling /api/users/ensure", e);
    return false;
  }
}

export async function logout(): Promise<boolean> {
  try {
    const res = await fetch("/api/users/logout", { method: "POST" });
    return res.ok;
  } catch (error) {
    console.error("Logout failed", error);
    return false;
  }
}
