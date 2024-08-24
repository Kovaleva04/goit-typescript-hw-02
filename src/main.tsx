import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./App";  // Переконайтеся, що цей файл має розширення .tsx
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
