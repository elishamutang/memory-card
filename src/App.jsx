import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);
  const [images, setImages] = useState([]);

  const endPoint = new URL("https://api.giphy.com/v1/gifs/search");
  endPoint.searchParams.append("api_key", "XKelAPHESxBXFhHXS8Hv8Ou4VzWbEbhy");
  endPoint.searchParams.append("q", "friends");
  endPoint.searchParams.append("limit", "12");

  useEffect(() => {
    fetch(endPoint)
      .then((res) => res.json())
      .then((dataObj) => {
        setImages(() => {
          const imagesCopy = [...dataObj.data];

          return imagesCopy;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(images);

  return (
    <>
      <Header score={score} />
      <main>
        {images.map((item) => {
          return <img key={item.id} src={item.images.original.webp} className="image" />;
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
