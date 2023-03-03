import { useState } from "react";
import Hero from "../components/Hero";
import "./HomePage.scss";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>React-Hook-Hero</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Hero name="Easy Front-End" />
    </div>
  );
}

export default HomePage;
