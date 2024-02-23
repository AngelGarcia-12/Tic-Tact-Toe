export const Tile = ({className, value, onClick, playerTurn}) => {
    let hoverClass;
    if(value === null && playerTurn != null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    }
  return (
    <div 
        onClick={onClick} 
        className={`tile ${className} ${hoverClass}`}
    >
        {value}
    </div>
  )
}
