import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const URL = "https://hook.eu1.make.com/yq6j6xvjm6xm14wc6tjz4jqi5k9eztek";

function App() {
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name &&
      user.name !== "" &&
      user.tel &&
      user.tel !== "" &&
      user.email &&
      user.email !== ""
    ) {
      axios
        .post(URL, {
          date: Date.now(),
          ...user
        })
        .then(() => setUser());
    } else {
      alert("Заповніть всі поля форми");
    }
  };
  const handleChange = ({ target }) =>
    setUser((prev) => ({ ...prev, [target.name]: target.value }));

  return (
    <div
      style={{
        width: "80%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        padding: "20px",
        border: "2px solid black",
        boxShadow: "3px 5px 25px 5px grey"
      }}
    >
      <h1>Заповніть форму замовлення</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <label
          style={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%"
          }}
        >
          Ім'я:
          <input
            style={{ marginLeft: "5px", padding: "5px", width: "100%" }}
            type="text"
            name="name"
            onChange={handleChange}
            value={user?.name || ""}
          />
        </label>
        <label
          style={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%"
          }}
        >
          Телефон:
          <input
            style={{ marginLeft: "5px", padding: "5px", width: "100%" }}
            type="text"
            name="tel"
            onChange={handleChange}
            value={user?.tel || ""}
          />
        </label>
        <label
          style={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%"
          }}
        >
          Email:
          <input
            style={{ marginLeft: "5px", padding: "5px", width: "100%" }}
            type="email"
            name="email"
            onChange={handleChange}
            value={user?.email || ""}
          />
        </label>
        {/* {errors.email && touched.email && errors.email} */}
        <button
          type="submit"
          // disabled={isSubmitting}
          style={{ width: "50%", padding: "10px" }}
        >
          Замовити
        </button>
      </form>
    </div>
  );
}

export default App;
