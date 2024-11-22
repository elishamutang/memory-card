import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [images, setImages] = useState([]);

  const endPoint = new URL("https://api.giphy.com/v1/gifs/search");
  endPoint.searchParams.append("api_key", "XKelAPHESxBXFhHXS8Hv8Ou4VzWbEbhy");
  endPoint.searchParams.append("q", "Friends");

  useEffect(() => {
    // Fetch GIFs.
    fetch(endPoint)
      .then((res) => res.json())
      .then((dataObj) => {
        setImages(() => {
          // Filter only GIFs from the show 'Friends'.
          const imagesCopy = [...dataObj.data].filter((item) => {
            if (item.slug.startsWith("Friends")) {
              return item;
            }
          });

          const randomisedImages = randomise(imagesCopy.slice(0, 12));
          return randomisedImages;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(images);

  function clickHandler(e) {
    // After each click, randomise GIFs.
    // Add to score IF:
    // a) User did not click on a image that has already been clicked previously.

    if (!e.target.classList.contains("clicked")) {
      setScore(score + 1);
    } else {
      setBestScore(score);
      setScore(0);
    }

    e.target.classList.toggle("clicked");
    randomise(images);
  }

  // Fisher-Yates Shuffle
  function randomise(arr) {
    let currentIdx = arr.length;

    while (--currentIdx > 0) {
      let randomIdx = Math.floor(Math.random() * currentIdx);
      let tempVal = arr[randomIdx];

      // Swap
      arr[randomIdx] = arr[currentIdx];
      arr[currentIdx] = tempVal;
    }

    return arr;
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main>
        {images.map((item) => {
          return (
            <img key={item.id} id={item.id} src={item.images.original.webp} onClick={clickHandler} className="image" />
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
