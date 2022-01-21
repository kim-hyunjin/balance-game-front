import React from "react";
import { Board } from "../models/board";
import style from "./card.module.css";

export default function Card({ board }: { board: Board }) {
    return (
        <div className={style.card}>
            <img
                className={style.thumbnail}
                src={board.thumbnail}
                alt="thumbnail"
                loading="lazy"
            ></img>
            <h2>{board.title}</h2>
            <p>{board.description}</p>
        </div>
    );
}
