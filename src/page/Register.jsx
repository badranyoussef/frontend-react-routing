import { useState } from "react";
import {registerUser} from "../service/apiFacade.js";
import {Navigate} from "react-router-dom";
import GlobalFormStyles from "../styles/GlobalFormStyle.js";

// eslint-disable-next-line react/prop-types
const Register = ({setUser, isLoggedIn, setIsLoggedIn}) => {
  // Tilstand til at gemme formularoplysninger
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });

  // Funktion til at håndtere ændringer i formularfelter
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Funktion til at håndtere formularindsendelse
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      // kalder registrerings metoden
      const response = await registerUser(formData.name, formData.email, formData.password, formData.phone);

      // Nulstil formular efter indsendelse
      setFormData({
      name: "",
      phone: "",
      email: "",
      password: ""
    });

      console.log(formData);
      setUser(response)
      setIsLoggedIn(true);

    setUser(response)

    }catch (e) {
      console.error("registration failed", e)
    }

  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <GlobalFormStyles/>
      <h1>Register</h1>
      {/* Formular til registrering */}
      <form onSubmit={handleSubmit}>
        {/* Navn felt */}
        <div>
          <label htmlFor="name">Navn:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Telefonnummer felt */}
        <div>
          <label htmlFor="phone">Telefon nr:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {/* Email felt */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Adgangskode felt */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Indsend knap */}
        <button type="submit">Registrer</button>
      </form>
    </>
  );
};

export default Register;
