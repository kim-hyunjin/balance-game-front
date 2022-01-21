import React from "react";
import { useQuery } from "react-query";
import { getBoards } from "../api/board";
import BoardList from "../components/BoardList";
import { BoardPage } from "../models/board";

export default function Home() {
    const { isLoading, error, data } = useQuery<boolean, { message: string }, BoardPage>(
        "boards",
        getBoards
    );
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>An error has occurred: ${error.message}</h1>;

    return <BoardList boards={data?.content!} />;
}
