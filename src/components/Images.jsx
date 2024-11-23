export default function Images({ images, clickHandler }) {
  return (
    <main>
      {images.map((item) => {
        return (
          <img
            key={item.id}
            id={item.id}
            src={item.images.original.webp}
            onClick={clickHandler}
            className={item.clicked ? "image clicked" : "image"}
          />
        );
      })}
    </main>
  );
}
