import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <Header score={score} />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
