import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()

    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }

    }

    style = {
        margin: '50px',
        border: '1px whitesmoke solid',
        borderRadius: '5px',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        padding: '30px',
        ':hover': {
            boxShadow: '0 0 10px 3px rgba(214, 48, 49, .10)'
        }
    };

    render() {
        return (
            <div className={'Car'} style={this.style}>

                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.age}</strong></p>
                <button onClick={() => this.props.onChangeTitle(this.props.name)}>Bye</button>
                <button onClick={this.props.deleteElement}>delete</button>
                {/*<button onClick={props.onChangeTitle}>Bye</button>*/}
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}/>
                {this.props.children}
            </div>
        )
    }

};

Car.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    deleteElement: PropTypes.func
};
export default Radium(Car);
