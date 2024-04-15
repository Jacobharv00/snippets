"use client";

interface IErrorPage {
    error: Error;
    reset: () => void;
}

export default function ErrorPage({ error, reset }: IErrorPage) {
    return <div>{error.message}</div>;
}
