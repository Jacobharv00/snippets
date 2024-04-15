"use client";

import { useState } from "react";
import { Editor } from "@monaco-editor/react";

import * as actions from "@/actions";

import type { Snippet } from "@prisma/client";

interface ISnippetEditForm {
    snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: ISnippetEditForm) {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = "") => {
        setCode(value);
    };

    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

    return (
        <div>
            <Editor
                height="40vh"
                theme="vs-dark"
                language="javascript"
                defaultValue={snippet.code}
                options={{ minimap: { enabled: false } }}
                onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button type="submit" className="p-2 border rounded">
                    Save
                </button>
            </form>
        </div>
    );
}
