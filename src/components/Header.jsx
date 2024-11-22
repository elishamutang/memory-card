import "../styles/Header.css";

export default function Header({ score, bestScore }) {
  return (
    <header className="header">
      {/* Insert Friends logo instead of typed out version. */}
      <h1>Friends Memory Game</h1>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}
