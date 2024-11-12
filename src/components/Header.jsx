import "../styles/Header.css";

export default function Header({ score }) {
  return (
    <header className="header">
      <h1>Memory Card</h1>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {score}</p>
      </div>
    </header>
  );
}
