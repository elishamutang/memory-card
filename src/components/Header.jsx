import "../styles/Header.css";

export default function Header({ score }) {
  return (
    <header className="header">
      {/* Insert Friends logo instead of typed out version. */}
      <h1>Friends Memory Game</h1>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {score}</p>
      </div>
    </header>
  );
}
