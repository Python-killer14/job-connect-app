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
  CaseSensitive,
} from "lucide-react";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";

type Props = {
  editor: Editor;
};

const TipTapMenuBar = ({ editor }: Props) => {
  const [url, setUrl] = useState<string>("");

  if (!editor) return null;

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

  const isAnyHeadingActive = () => {
    for (let level = 1; level <= 6; level++) {
      if (editor.isActive("heading", { level })) {
        return true;
      }
    }
    return false;
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

      {/* Headings Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              isAnyHeadingActive() ? "editor-btn-active" : "",
              "p-1 hover:bg-slate-200 rounded-sm"
            )}
          >
            <CaseSensitive className="w-5 h-5" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto flex flex-col items-start px-0">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              disabled={
                !editor
                  .can()
                  .chain()
                  .focus()
                  .toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 })
                  .run()
              }
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 })
                  .run()
              }
              className={cn(
                editor.isActive("heading", {
                  level: level as 1 | 2 | 3 | 4 | 5,
                })
                  ? "editor-btn-active"
                  : "",
                "py-2 hover:bg-slate-200 px-4 rounded-none w-full"
              )}
            >
              <p className={cn("level-h" + level, "text-left")}>
                Heading {level}
              </p>
            </button>
          ))}
        </PopoverContent>
      </Popover>

      {/* List Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              editor.isActive("bulletList") || editor.isActive("orderedList")
                ? "editor-btn-active"
                : "",
              "p-1 hover:bg-slate-200 rounded-sm"
            )}
          >
            <List className="w-5 h-5" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto flex flex-col items-start px-0">
          <button
            disabled={!editor.can().chain().focus().toggleBulletList().run()}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(
              editor.isActive("bulletList") ? "editor-btn-active" : "",
              "py-2 hover:bg-slate-200 px-4 rounded-none w-full text-left"
            )}
          >
            <List className="w-5 h-5 inline mr-2" /> Bullet List
          </button>
          <button
            disabled={!editor.can().chain().focus().toggleOrderedList().run()}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(
              editor.isActive("orderedList") ? "editor-btn-active" : "",
              "py-2 hover:bg-slate-200 px-4 rounded-none w-full text-left"
            )}
          >
            <ListOrdered className="w-5 h-5 inline mr-2" /> Ordered List
          </button>
        </PopoverContent>
      </Popover>

      {/* Align Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              editor.isActive({ textAlign: "left" }) ||
                editor.isActive({ textAlign: "center" }) ||
                editor.isActive({ textAlign: "right" })
                ? "editor-btn-active"
                : "",
              "p-1 hover:bg-slate-200 rounded-sm"
            )}
          >
            <AlignLeft className="w-5 h-5" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto flex flex-col items-start px-0">
          <button
            disabled={!editor.can().chain().focus().setTextAlign("left").run()}
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={cn(
              editor.isActive({ textAlign: "left" }) ? "editor-btn-active" : "",
              "py-2 hover:bg-slate-200 px-4 rounded-none w-full text-left"
            )}
          >
            <AlignLeft className="w-5 h-5 inline mr-2" /> Align Left
          </button>
          <button
            disabled={
              !editor.can().chain().focus().setTextAlign("center").run()
            }
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={cn(
              editor.isActive({ textAlign: "center" })
                ? "editor-btn-active"
                : "",
              "py-2 hover:bg-slate-200 px-4 rounded-none w-full text-left"
            )}
          >
            <AlignCenter className="w-5 h-5 inline mr-2" /> Align Center
          </button>
          <button
            disabled={!editor.can().chain().focus().setTextAlign("right").run()}
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={cn(
              editor.isActive({ textAlign: "right" })
                ? "editor-btn-active"
                : "",
              "py-2 hover:bg-slate-200 px-4 rounded-none w-full text-left"
            )}
          >
            <AlignRight className="w-5 h-5 inline mr-2" /> Align Right
          </button>
        </PopoverContent>
      </Popover>

      {/* Quote Button */}
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

      {/* Link Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              editor.isActive("link") ? "editor-btn-active" : "",
              "p-1 hover:bg-slate-200 rounded-sm"
            )}
          >
            <Link className="w-5 h-5" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4 flex flex-col items-start">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            className="p-1 border rounded-sm w-full mb-2"
          />
          <Button onClick={setLink} className="w-full">
            Set Link
          </Button>
        </PopoverContent>
      </Popover>

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
