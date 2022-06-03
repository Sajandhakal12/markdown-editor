import { useState } from "react";
import { Header } from "./components/Header";
import MarkdownPreview from "./components/MarkdownPreview";
import TextInput from "./components/TextInput";
// import Test from "./Test";

function App() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Header value={value} />
      <div className="content">
        <TextInput value={value} setValue={setValue} />
        <MarkdownPreview value={value} />
      </div>
    </div>
  );
}

export default App;
