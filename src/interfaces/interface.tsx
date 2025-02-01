export interface Card {
    src: string;
    matched: boolean;
    id?: number;
  }
  
  export interface GameType {
    id: number;
    name: string;
    cards: Card[];
  }
  
  export interface GameState {
    cards: Card[];
    turns: number;
    choiceOne: Card | null;
    choiceTwo: Card | null;
    disabled: boolean;
  }