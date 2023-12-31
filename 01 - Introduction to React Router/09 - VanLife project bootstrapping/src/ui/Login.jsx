import { Link, useSearchParams } from "react-router-dom";
import "../css/Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const msg = searchParams.get("message");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <section className="login-container">
      <h1 style={{ color: msg ? "red" : "" }}>
        {msg ? "You need to sign in first" : "Sign in to your account"}
      </h1>

      <form>
        <input
          placeholder="Email address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          minLength={5}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Sign in
        </button>
      </form>

      <p>
        Don't have an account? <Link>Create one now</Link>
      </p>
    </section>
  );
}

export default Login;
