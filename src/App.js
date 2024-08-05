import React from "react";
import Basic from "./components/Basic";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Resources from "./components/Resources";
import Dev from "./components/Dev";


export default function App() {
  return (
    <main className="text-gray-200 bg-gray-600 body-font">
      <Basic />
      <Skills />
      <Work />
      <Resources/>
      <Dev />
      
    </main>
  );
}