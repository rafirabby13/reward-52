/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Swal from "sweetalert2";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="animate__animated animate__flip animate__infinite animate__slow">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img  src={reactLogo} className="logo react " alt="React logo" />
        </a>
      </div>
      <h1 className="animate__animated animate__swing animate__slow animate__infinite	animate__jackInTheBox">Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            Swal.fire({
              title: "Sweet!",
              text: "Modal with a custom image.",
              imageUrl: "https://unsplash.it/400/200",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
              showClass: {
                popup: `
                  animate__animated
                  animate__flip
                  animate__faster
                 
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__flip
                  animate__faster
                   
                `
              }
            })
          }
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
