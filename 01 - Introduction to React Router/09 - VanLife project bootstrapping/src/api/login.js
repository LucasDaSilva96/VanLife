import { redirect } from "react-router-dom";
import { getHostAPI } from "./fetchVans";

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await getHostAPI(email, password);

  if (data) {
    localStorage.setItem("loggedIn", "true");
    location.href = "/host";
  } else {
    localStorage.setItem("loggedIn", "false");
    throw redirect("/login?message=No user found with those credentials");
  }

  return null;
}
