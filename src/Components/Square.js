import React from 'react';

const Square = props => {
    return(
        <button className="square" onClick={props.handleclick}> 
        {props.value} 
        </button>
    )
}
export default Square;