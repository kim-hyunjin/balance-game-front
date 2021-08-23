import axios from "axios";
import { makeAutoObservable } from "mobx";

type GameCard = {
  id: number;
  title: string;
  writer: string;
  description: string | null;
  thumnail: string | null;
};

class GameCardList {
  cards: GameCard[] = [];
  selectedCard: GameCard | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCards(cards: GameCard[]) {
    this.cards = cards;
  }

  getCards() {
    // // fetch data from backend
    // axios.get("http://localhost:8080/cards").then((res) => {
    //   this.setCards(res.data);
    // });
    this.cards = [
      {
        id: 1,
        title: "여 아이돌 이상형 월드컵",
        writer: "김씨",
        description: "2020년대 여 아이돌 가수 이상형 월드컵",
        thumnail: "",
      },
      {
        id: 2,
        title: "남 아이돌 이상형 월드컵",
        writer: "이씨",
        description: "2020년대 남 아이돌 가수 이상형 월드컵",
        thumnail: "",
      },
      {
        id: 2,
        title: "해외 팝싱어 이상형 월드컵",
        writer: "박씨",
        description: "2010년 이후 해외 팝싱어 이상형 월드컵",
        thumnail: "",
      },
    ];
  }
}

const gameCardList = new GameCardList();
export default gameCardList;
