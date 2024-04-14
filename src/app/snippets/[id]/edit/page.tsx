import { notFound } from "next/navigation";

import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

interface ISnippetEditPage {
    params: {
        id: string;
    };
}

export default async function SnippetEditPage({ params }: ISnippetEditPage) {
    const id = parseInt(params.id);

    const snippet = await db.snippet.findFirst({
        where: { id },
    });

    if (!snippet) {
        return notFound();
    }

    return <SnippetEditForm snippet={snippet} />;
}
