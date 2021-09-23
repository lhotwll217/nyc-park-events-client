import { useState } from 'react'
import {useHistory} from 'react-router-dom'

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory()
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ email, password }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
        
        history.push("/")

    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
        placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <input
        placeholder="password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <button type="submit">Login</button>
      </form>
    );
  }

  export default Login