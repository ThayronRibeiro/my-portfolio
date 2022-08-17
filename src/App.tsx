import React from "react";
import { AboutMe } from "./components/AboutMe";
import { Apresentation } from "./components/Apresentation";
import { Knows } from "./components/Knows";
import { NavbarComponent } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <main>
        <NavbarComponent />
        <Apresentation />
      </main>

      <AboutMe />
      <Projects />
      <Knows />
    </>
  );
}

export default App;
