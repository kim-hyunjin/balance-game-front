import React from "react";
import { useQuery } from "react-query";
import { getBoards } from "../api/board";
import { BoardPage } from "../models/board";

export default function Home() {
    const { isLoading, error, data } = useQuery<boolean, { message: string }, BoardPage>(
        "boards",
        getBoards
    );
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>An error has occurred: ${error.message}</h1>;

    return (
        <div>
            {data?.content.map((c) => (
                <div key={c.id}>
                    <h1>{c.title}</h1>
                    <h3>{c.description}</h3>
                    <ul>
                        {c.contents.map((d) => (
                            <li key={d.id}>{d.description}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
