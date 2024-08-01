"use client";
import { useState } from "react";

// Tiptap editor
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";

// Components
import TipTapMenuBar from "./tipTapMenuBar";

const Tiptap = () => {
  const [editorState, setEditorState] = useState<string>("");
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

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
