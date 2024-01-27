import './showGrid.css'

const ShowGrid = ( {gameData}) => {

    const handleClick = () =>{
        
    }
    return ( 
        <div className="game-grid">
            <div className="row">
                <div className="cell"> {gameData[0]} </div>
                <div className="cell"> {gameData[0]} </div>
                <div className="cell"> {gameData[0]} </div>
            </div>
            <div className="row">
                <div className="cell"> {gameData[0]} </div>
                <div className="cell"> {gameData[0]} </div>
                <div className="cell"> {gameData[0]} </div>    
            </div>
            <div className="row">                
                <div className="cell"> {gameData[0]} </div>
                <div className="cell"> {gameData[0]} </div>
                <div className="cell"> {gameData[0]} </div>    
            </div>            
        </div>
     );
}
 
export default ShowGrid;