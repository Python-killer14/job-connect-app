"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import TipTapMenuBar from "./tipTapMenuBar";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";

const Tiptap = () => {
  const [editorState, setEditorState] = useState<string>("");
  const editor = useEditor({
    autofocus: true,
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

  console.log("editor state:", editorState);

  return (
    <main className="mx-4 bg-white-gray border max-w-3xl rounded">
      <div>{editor && <TipTapMenuBar editor={editor} />}</div>
      <div className=" w-full px-2 pt-3 pb-2">
        <EditorContent className="prose p-0 m-0 " editor={editor} />
      </div>
    </main>
  );
};

export default Tiptap;
