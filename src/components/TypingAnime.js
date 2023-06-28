import { useEffect, useState } from "react";

const TypingAnime = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let animeInterval;

    const animeText = () => {
      let currentLength = displayText.length;
      if (currentLength < text.length) {
        setDisplayText(prevText => prevText + text[currentLength]);
      } else {
        clearInterval(animeInterval);
      }
    };
    animeInterval = setInterval(animeText, 50);

    return () => {
      clearInterval(animeInterval);
    };
  }, [displayText, text]);

  return <h1>{displayText}</h1>;
};

export default TypingAnime;
