import axios from "axios";
import { makeAutoObservable } from "mobx";

type Board = {
  id: number;
  title: string;
  writer?: string;
  description?: string;
};

class BoardList {
  boards: Board[] = [];
  selectedBoard: Board | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setBoards(boards: Board[]) {
    this.boards = boards;
  }

  fetchBoards() {
    // // fetch data from backend
    // axios.get("http://localhost:8080/boards").then((res) => {
    //   this.setBoards(res.data);
    // });
    this.boards = [
      {
        id: 1,
        title: "여 아이돌 이상형 월드컵",
        writer: "김씨",
        description: "2020년대 여 아이돌 가수 이상형 월드컵",
      },
      {
        id: 2,
        title: "남 아이돌 이상형 월드컵",
        writer: "이씨",
      },
      {
        id: 2,
        title: "해외 팝싱어 이상형 월드컵",
        writer: "박씨",
        description: "2010년 이후 해외 팝싱어 이상형 월드컵",
      },
    ];
  }

  setSelectedBoard(board: Board) {
    this.selectedBoard = board;
  }
}

const boardList = new BoardList();
export default boardList;
