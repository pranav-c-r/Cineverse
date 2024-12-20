import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot for React 18
import App from "./App"; // Import the main App component

// Find the root element in the DOM
const rootElement = document.getElementById("root");

// Ensure the root element exists before rendering
if (rootElement) {
  const root = createRoot(rootElement); // Initialize React application
  root.render(<App />); // Render the App component into the root element
} else {
  console.error("Root element not found. Please check your HTML file.");
}
