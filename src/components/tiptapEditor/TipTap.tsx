"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import TipTapMenuBar from "./tipTapMenuBar";

const Tiptap = () => {
  const [editorState, setEditorState] = useState<string>("");
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

  return (
    <div>
      <div>{editor && <TipTapMenuBar editor={editor} />}</div>
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
