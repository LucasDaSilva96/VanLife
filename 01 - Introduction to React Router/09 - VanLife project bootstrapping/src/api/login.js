import { redirect } from "react-router-dom";

async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({ email, password });

  if (data.user) {
    localStorage.setItem("loggedIn", "true");
    location.href = "/host";
  } else {
    localStorage.setItem("loggedIn", "false");
    throw redirect("/login?message=No user found with those credentials");
  }

  return null;
}
