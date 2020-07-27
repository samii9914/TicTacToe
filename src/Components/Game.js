import React from 'react';
import Board from './Board';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            XisNext:true,
            stepNumber:0,
            history:[
                {squares: Array(9).fill(null)}
            ]
        }
    }
    handleclick = (i) => {
        const history=this.state.history;
        const current=history[history.length-1];
        const squares=current.squares;
        const winner=calculateWinner(squares);
        //if winner is there or square is already filled
        if(winner || squares[i])
        {
            return;
        }
        squares[i]=this.state.XisNext? 'X' : '0' ;
        this.setState({
            history:history.concat({
                squares: squares
            }),
            XisNext:!this.state.XisNext,
            stepNumber:history.length
        })
    }
    
    render(){
        const history=this.state.history;
        const squares=history[this.state.stepNumber].squares;
        let status;
        const winner=calculateWinner(squares);
        if(winner)
        {
            status="Winner is "+winner;
        }
        else{
            if(this.state.stepNumber===9)
            {
                status="Game is Tie";
            }
            else
            {
            status="Next Turn : "+(this.state.XisNext? 'X' : '0' );
            }
        }
    return(
        <div className="game">
            <div className="game-board">
               <Board handleclick={(i)=>this.handleclick(i)} squares={squares}/>
            </div>
            <div className="game-info">{status}</div>
        </div>
    )
    }
}

const calculateWinner=(squares)=>{
    const possibilities=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<possibilities.length;i++)
    {
        const [a,b,c]=possibilities[i];
        if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c])
        {
            return squares[a];
        }
    }
    return null;
}

export default Game;