import "../styles/Footer.css";
import AttributionMark from "../assets/GIPHY_logo.gif";

export default function Footer() {
  return (
    <footer>
      <h2>
        Made by <a href="https://github.com/elishamutang/">elishamutang</a>
      </h2>
      <img src={AttributionMark} className="attribution-mark" />
    </footer>
  );
}
