import "../styles/Header.css";
import Logo from "../assets/Friends_logo.svg";

export default function Header({ score, bestScore }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} style={{ width: "20%" }} />
        <h1>Memory Game</h1>
      </div>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}
