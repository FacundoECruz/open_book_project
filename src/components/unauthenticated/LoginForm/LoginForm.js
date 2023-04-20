import "./LoginForm.css"

function LoginForm({btnText}) {

  function handleSubmit(e) {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    console.log(`Username: ${username}, Password: ${password}`)
  }

  return ( 
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="username-container">
          <label htmlFor="username">Username </label>
          <input type="text" id="username" />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password </label>
          <input type="password" id="password" />
        </div>
        <button type="submit">{btnText}</button>
      </form>
    </div>
   );
}

export default LoginForm;