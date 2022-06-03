import { useEffect, useState, useRef } from "react";

const TextInput = ({ value, setValue }) => {
  const [lineNumbers, setLineNumbers] = useState(1);
  const [contentLastScrollTop, setContentLastScrollTop] = useState(0);

  //   const [textAreaWidth, setTextAreaWidth] = useState(0);
  //   const [fontSizeTextArea, setFontSizeTextArea] = useState(1);

  const sidebarScroll = useRef();
  const contentScroll = useRef();

  const onSidebarScroll = (e) => {
    contentScroll.current.scrollTop = e.target.scrollTop;
  };

  const onContentScroll = (e) => {
    if (e.target.scrollTop !== contentLastScrollTop) {
      sidebarScroll.current.scrollTop = e.target.scrollTop;
      setContentLastScrollTop(e.target.scrollTop);
    }
  };

  //   const calculateTextAreaWidth = () => {
  //     const textarea = document.getElementById("text-area-content-id");
  //     // console.log(window.getComputedStyle(textarea).letterSpacing);
  //     const [fontSize] = window.getComputedStyle(textarea).fontSize.split("px");
  //     setFontSizeTextArea(+fontSize);
  //     setTextAreaWidth(textarea.offsetWidth);
  //   };

  //   console.log((textAreaWidth + 16) / fontSizeTextArea, value.length);

  //   useEffect(() => {
  //     calculateTextAreaWidth();
  //     window.addEventListener("resize", calculateTextAreaWidth);
  //   }, []);

  useEffect(() => {
    setLineNumbers(value.split("\n").length);
  }, [value]);

  return (
    <div className="content-item">
      <div
        className="line-number"
        ref={sidebarScroll}
        onScroll={onSidebarScroll}
      >
        {Array.from({ length: lineNumbers }, (v, i) => (
          <p>{i + 1}</p>
        ))}
      </div>
      <div className="text-area">
        <textarea
          onScroll={onContentScroll}
          ref={contentScroll}
          id="text-area-content-id"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="text-area-content"
          rows={10}
          wrap="off"
        />
      </div>
    </div>
  );
};

export default TextInput;
