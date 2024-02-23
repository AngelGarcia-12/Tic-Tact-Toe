import { GameState } from "../helpers/GameState"

export const ButtonReset = ({gameState, onReset}) => {
  if(gameState === GameState.inProgress){
    return;
  }

  return (
    <button onClick={onReset} className="reset-button">Play Again</button>
  )
}
