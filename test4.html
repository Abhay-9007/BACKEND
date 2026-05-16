import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/game">Coin Flip</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<CoinFlip />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to the Gambling Site</h1>;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/profile");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post(`${API_URL}/register`, { username, email, password });
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Balance: ${user.balance}</p>
      <button onClick={() => localStorage.clear()}>Logout</button>
    </div>
  );
}

function CoinFlip() {
  const [choice, setChoice] = useState("heads");
  const [amount, setAmount] = useState(10);
  const [result, setResult] = useState(null);

  const handleBet = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.post(`${API_URL}/bet`, { userId: user.id, amount, choice });
    setResult(res.data);
  };

  return (
    <div>
      <h2>Coin Flip</h2>
      <select onChange={(e) => setChoice(e.target.value)}>
        <option value="heads">Heads</option>
        <option value="tails">Tails</option>
      </select>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleBet}>Bet</button>
      {result && <p>Outcome: {result.result}, {result.won ? "You won!" : "You lost!"}</p>}
    </div>
  );
}

export default App;
