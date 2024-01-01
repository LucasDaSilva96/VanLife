import { Link, useSearchParams, Form, useNavigation } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const msg = searchParams.get("message");
  const { state } = useNavigation();
  history.replaceState({}, "", "/");
  return (
    <section className="login-container">
      <h1 style={{ color: msg ? "red" : "" }}>
        {msg ? msg : "Sign in to your account"}
      </h1>

      <Form method="post" replace>
        <input type="email" name="email" placeholder="Email address" required />
        <input
          type="password"
          name="password"
          minLength={5}
          placeholder="Password"
          required
        />
        <button disabled={state === "submitting"}>
          {state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>

      <p>
        Don't have an account? <Link>Create one now</Link>
      </p>
    </section>
  );
}

export default Login;
