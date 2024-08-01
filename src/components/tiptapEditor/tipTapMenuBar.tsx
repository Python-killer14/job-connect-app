"use client";
import { cn } from "@/lib/utils";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  ListOrdered,
  Code,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link,
  Unlink,
  List,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "lucide-react";
import React, { useState } from "react";

type Props = {
  editor: Editor;
};

const TipTapMenuBar = ({ editor }: Props) => {
  if (!editor) return null;

  const [url, setUrl] = useState<string>("");

  const setLink = () => {
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();

      setUrl("");
    }
  };

  return (
    <div className="border-b flex items-center gap-1 pt-2 pb-1 px-2">
      <button
        disabled={!editor.can().chain().focus().toggleBold().run()}
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn(
          editor.isActive("bold") ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Bold className="w-5 h-5" />
      </button>
      <button
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn(
          editor.isActive("italic") ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Italic className="w-5 h-5" />
      </button>
      <button
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(
          editor.isActive("bulletList") ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <List className="w-5 h-5" />
      </button>
      <button
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn(
          editor.isActive("orderedList") ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <ListOrdered className="w-5 h-5" />
      </button>
      <button
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={cn(
          editor.isActive("codeBlock") ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Code className="w-5 h-5" />
      </button>
      <button
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={cn(
          editor.isActive("blockquote") ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Quote className="w-5 h-5" />
      </button>
      <button
        disabled={!editor.can().chain().focus().setTextAlign("left").run()}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={cn(
          editor.isActive({ textAlign: "left" }) ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <AlignLeft className="w-5 h-5" />
      </button>
      <button
        disabled={!editor.can().chain().focus().setTextAlign("center").run()}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={cn(
          editor.isActive({ textAlign: "center" }) ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <AlignCenter className="w-5 h-5" />
      </button>
      <button
        disabled={!editor.can().chain().focus().setTextAlign("right").run()}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={cn(
          editor.isActive({ textAlign: "right" }) ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <AlignRight className="w-5 h-5" />
      </button>
      <button
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={cn(
          editor.isActive("heading", { level: 1 }) ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Heading1 className="w-5 h-5" />
      </button>
      <button
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={cn(
          editor.isActive("heading", { level: 2 }) ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Heading2 className="w-5 h-5" />
      </button>
      <button
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={cn(
          editor.isActive("heading", { level: 3 }) ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Heading3 className="w-5 h-5" />
      </button>
      <button
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 4 }).run()
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={cn(
          editor.isActive("heading", { level: 4 }) ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Heading4 className="w-5 h-5" />
      </button>
      <button
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 5 }).run()
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={cn(
          editor.isActive("heading", { level: 5 }) ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Heading5 className="w-5 h-5" />
      </button>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        className="p-1 border rounded-sm mr-1"
      />
      <button
        onClick={setLink}
        className={cn(
          editor.isActive("link") ? "editor-btn-active" : "",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Link className="w-5 h-5" />
      </button>
      <button
        disabled={!editor.can().chain().focus().unsetLink().run()}
        onClick={() => editor.chain().focus().unsetLink().run()}
        className={cn(
          editor.isActive("link") ? "" : "editor-btn-active",
          "p-1 hover:bg-slate-200 rounded-sm"
        )}
      >
        <Unlink className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TipTapMenuBar;
