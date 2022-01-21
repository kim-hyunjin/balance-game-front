import React from "react";
import { Board } from "../models/board";
import Card from "./Card";
import style from "./boardList.module.css";

type BoardListProp = {
    boards: Board[];
};

export default function BoardList({ boards }: BoardListProp) {
    return (
        <div className={style.boardList}>
            {boards.map((b) => (
                <Card key={b.id} board={b}></Card>
            ))}
        </div>
    );
}
