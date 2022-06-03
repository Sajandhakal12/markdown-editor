import { useEffect, useState } from "react";

export const Header = ({ value }) => {
  const [timeToRead, setTimeToRead] = useState(0);
  const [noOfWords, setNumberOfWords] = useState(0);
  const [noOfCharacters, setNumberOfCharacters] = useState(0);

  useEffect(() => {
    const text = document.getElementById("preview").innerText;
    const wpm = 225;

    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => String(word)).length;

    const time = Math.ceil(words / wpm);
    setTimeToRead(time);
    setNumberOfWords(words);
    setNumberOfCharacters(text.length);
  }, [value]);
  return (
    <div className="header uppercase">
      <div className="header-item">
        <p className="text-muted header-item-element ">DOCUMENT NAME</p>
        <p className="header-item-element">Document.md</p>
      </div>
      <div className="header-item">
        <p className="header-item-element">
          <span className="text-muted ">Reading Time:&nbsp;</span>
          <span className="">{timeToRead} MIN READ&nbsp;</span>
          <span className="text-muted ">Words:&nbsp;</span>
          <span>{noOfWords}</span>
        </p>
        <p className="header-item-element text-right">
          <span className="text-muted">Characters:&nbsp;</span>
          <span>{noOfCharacters}</span>
        </p>
      </div>
    </div>
  );
};
