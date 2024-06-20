import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    }
  
    const handleLogin = (event) => {
      event.preventDefault(); // Prevents default form submission behavior
      // Here you can perform your login logic, e.g., validation, API calls, etc.
      console.log('Username:', username);
      console.log('Password:', password);
      // Reset form fields if needed
      setUsername('');
      setPassword('');
    }
  
    return (
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    );
  }
  
  export default LoginForm;