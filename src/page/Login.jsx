import { useState } from "react";
import {login} from '../service/apiFacade.js';
import GlobalFormStyles from "../styles/GlobalFormStyle.js";
import {Navigate, NavLink} from "react-router-dom";
import styled from "styled-components";


const RegisterLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  margin-top: 10px;
  display: block;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;



// eslint-disable-next-line react/prop-types
const Login = ({setUser, isLoggedIn, setIsLoggedIn}) => {
  // Tilstand til at gemme formularoplysninger
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funktion til at håndtere ændringer i formularfelter
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Funktion til at håndtere formularindsendelse
  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      // Kalder login-metoden med brugernavn og adgangskode fra formular
      const response = await login(formData.username, formData.password)

      // Udtrækker JSON-responsen fra fetch-anmodningen
      console.log(response);

      // Nulstiler formular efter indsendelse
      setFormData({
        username: "",
        password: ""
      });
      setIsLoggedIn(true);
      console.log(isLoggedIn)
      setUser(response);
      console.log(formData);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Hvis brugeren er logget ind, omdirigeres til forsiden
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Container>
    <GlobalFormStyles/>
      <h1>Login</h1>
      {/* Formular til login */}
      <form onSubmit={handleSubmit}>
        {/* Brugernavn */}
        <div>
          <label htmlFor="username">Brugernavn:</label>
          <input
            id="username"
            type="text"
            placeholder="indtast brugernavn"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        {/* Adgangskode */}
        <div>
          <label htmlFor="password">Adgangskode:</label>
          <input
            id="password"
            type="password"
            placeholder="indtast adgangskode"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* login knap */}
        <button type="submit">Login</button>
      </form>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
      <RegisterLink to="/register" >Don't have an account? Register here</RegisterLink>
      </Container>
    </>
  );
};

export default Login;
