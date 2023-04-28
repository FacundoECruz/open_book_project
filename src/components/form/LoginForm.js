import "../../stylesheets/LoginForm.css";
import FormInput from "./FormInput";
import { useState } from "react";

function LoginForm({ btnText, onSubmit }) {
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    if (username || password === "") {
      setError("Please complete all fields");
    }

    const formData = { username: username, password: password };
    onSubmit(formData);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <FormInput label="username" type="text" />
      <FormInput label="password" type="password" />
      <button type="submit">{btnText}</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
}

export default LoginForm;
