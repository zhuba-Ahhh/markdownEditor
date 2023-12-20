import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Tinymce() {
  const editorRef = useRef(null);
  const getContent = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <Editor
      apiKey="wso7dxggbs0gyy3e3b9obxxwtbzbg1q7pl7d02de7fzvyl0t"
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue=""
      init={{
        height: 500,
        menubar: false,
        language: "zh_CN",
        placeholder: "请在此输入内容",
        block_formats:
          "标题 1=h1; 标题 2=h2; 标题 3=h3; 标题 4=h4; 正文(大)=h5; 正文=p;",
        fontsize_formats: "10px 12px 14px 16px 18px 20px 24px 28px 36px",
        contextmenu: "",
        branding: false,
        statusbar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          // "undo redo | blocks | " +
          // "bold italic forecolor | alignleft aligncenter " +
          // "alignright alignjustify | bullist numlist outdent indent | " +
          // "removeformat | help" +
          "undo redo formatselect fontsizeselect fontsizeselect bold italic underline strikethrough removeformat forecolor backcolor bullist numlist alignleft aligncenter alignright uploadimage link table hr full",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
}
