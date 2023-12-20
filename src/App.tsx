import React, { FC, useState } from "react";
import "./App.css";
import Tinymce from "./Views/Tinymce";
import Lexical from "./Views/Lexical";
import Tiptap from "./Views/Tiptap";

function App() {
  const [editors, setEditors] = useState<{
    [key in string]: boolean;
  }>({
    Tinymce: true,
    Lexical: true,
    Tiptap: true,
  });

  const toggleEditor = (editor: string) => {
    setEditors((prev) => ({ ...prev, [editor]: !prev[editor] }));
  };

  const EditorButton = ({ name }: { name: string }) => (
    <button
      onClick={() => toggleEditor(name)}
      className={editors[name] ? "show" : ""}
    >
      {editors[name] ? `Hide ${name}` : `Show ${name}`}
    </button>
  );

  const EditorSection = ({
    name,
    Component,
  }: {
    name: string;
    Component: FC;
  }) => (
    <div className={editors[name] ? "show" : "hidden"}>
      <Component />
    </div>
  );

  return (
    <>
      <div className="buttontoolbar">
        <EditorButton name="Tinymce" />
        <EditorButton name="Lexical" />
        <EditorButton name="Tiptap" />
      </div>
      <EditorSection name="Tinymce" Component={Tinymce} />
      <EditorSection name="Lexical" Component={Lexical} />
      <EditorSection name="Tiptap" Component={Tiptap} />
    </>
  );
}

export default App;
