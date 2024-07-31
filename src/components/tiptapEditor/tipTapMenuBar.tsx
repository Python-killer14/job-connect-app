import { cn } from "@/lib/utils";
import { Editor } from "@tiptap/react";
import { Bold, Italic } from "lucide-react";
import React from "react";

type Props = {
  editor: Editor;
};

const TipTapMenuBar = ({ editor }: Props) => {
  return (
    <div>
      <button
        disabled={!editor.can().chain().focus().toggleBold().run()}
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn(editor.isActive("bold") ? "editor-btn-active" : "")}
      >
        <Bold />
      </button>
      <button
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn(editor.isActive("italic") ? "editor-btn-active" : "")}
      >
        <Italic />
      </button>
    </div>
  );
};

export default TipTapMenuBar;
