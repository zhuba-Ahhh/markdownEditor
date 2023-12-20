import React, { useState } from "react";
import "./App.css";
import Tinymce from "./Views/Tinymce";
import Lexical from "./Views/Lexical";

function App() {
  const [showTinymce, setShowTinymce] = useState(true);
  const [showLexical, setShowLexical] = useState(true);
  const [showDraft, setShowDraft] = useState(true);

  return (
    <div className="App">
      <div className="buttontoolbar">
        <button
          onClick={() => setShowTinymce(!showTinymce)}
          className={showTinymce ? "show" : ""}
        >
          {showTinymce ? "Hide Tinymce" : "Show Tinymce"}
        </button>
        <button
          onClick={() => setShowLexical(!showLexical)}
          className={showLexical ? "show" : ""}
        >
          {showLexical ? "Hide Lexical" : "Show Lexical"}
        </button>
        <button
          onClick={() => setShowDraft(!showLexical)}
          className={showDraft ? "show" : ""}
        >
          {showDraft ? "Hide Draft" : "Show Draft"}
        </button>
      </div>
      <div className="editor">
        <div
          className={showTinymce ? "show" : "hidden"}
          style={{ width: "800px" }}
        >
          <Tinymce />
        </div>
        <div className={showLexical ? "show" : "hidden"}>
          <Lexical />
        </div>
        {/* <div className={showDraft ? "show" : "hidden"}></div> */}
      </div>
    </div>
  );
}

export default App;
