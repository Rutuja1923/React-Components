import { useState } from "react";

function LikeButton() {
  let [count, setCount] = useState(0);
  let [isLiked, setIsLiked] = useState(false);
  function handleLike() {
    setIsLiked(!isLiked);
    setCount((prev) => prev + 1);
  }
  let styles = {
    color : "red"
  }

  return (
    <div>
      <h2>Please Like Me!</h2>
      <p>Likes : {count}</p>
      <button onClick={handleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={styles}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </button>
    </div>
  );
}

export default LikeButton;
