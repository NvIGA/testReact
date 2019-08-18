import React from 'react'
import Radium from 'radium'
const Car = props => {

    const style = {
        margin: '50px',
        border: '1px whitesmoke solid',
        borderRadius: '5px',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        padding: '30px',
        ':hover': {
            boxShadow: '0 0 10px 3px rgba(214, 48, 49, .10)'
        }
    };

    return(
        <div className={"Car"} style={style}>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.age}</strong></p>
            <button onClick={() => props.onChangeTitle(props.name)}>Bye</button>
            <button onClick={props.deleteElement}>delete</button>
            {/*<button onClick={props.onChangeTitle}>Bye</button>*/}
            <input type="text" onChange={props.onChangeName} value={props.name}/>
            {props.children}
        </div>
    )
};
export default Radium(Car);
