import { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:3000/api/auth/login", data);
    alert(res.data.message);
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
