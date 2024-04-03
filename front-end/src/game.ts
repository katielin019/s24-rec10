interface GameState {
  nextPlayer: number;
  gameOver: boolean;
  winner: number;
  cells: Cell[];
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }