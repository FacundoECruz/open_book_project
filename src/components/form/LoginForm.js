import "../../stylesheets/LoginForm.css"
import { useState } from "react"

function LoginForm({btnText, onSubmit}) {

  const [error, setError] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value

    if(username || password === "") {
      setError("Please complete all fields")
    }

    const formData = {username: username, password: password}
    onSubmit(formData)
  }

  return ( 
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="username-container">
          <label htmlFor="username">Username </label>
          <input type="text" id="username" />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password </label>
          <input type="password" id="password" />
        </div>
        <button type="submit">{btnText}</button>
        {error ? <p>{error}</p> : null}
      </form>
   );
}

export default LoginForm;