import { useState } from "react";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const res = await axios.post("http://localhost:3000/api/auth/signup", data);
    alert(res.data.message);
  };

  return (
    <div>
      <h2>Signup</h2>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
