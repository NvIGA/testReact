import React, {Component} from 'react'
import Car from './Car'
import './App.css'

class App extends Component {

    state = {
        cars: [
            {name: "Ford", age: 2015},
            {name: "Audi", age: 2011},
            {name: "Lexus", age: 2016},
            {name: "Mazda", age: 2018}
        ],
        title: "React component",
        counter: 1,
        showList: false
    };

    deleteElement(names, index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({
            cars
        })
    }

    onChangeName(names, index) {

        const car = this.state.cars[index];
        car.name = names;
        const listCars = [...this.state.cars];
        listCars[index] = car;
        this.setState({cars: listCars})
    }

    toggleCarsHandler = () => {
        this.setState({
            showList: !this.state.showList
        });
        console.log(this.state.showList)
    };

    inputChangeTitle = (e) => {
        (e.target.value.length < 10)
            ? this.setState({
                title: e.target.value
            })
            : this.setState({
                title: "Max length 10"
            })
    };

    changeTitleHandle = (newTitle) => {

        this.setState((state) => {
            if (state.counter < 10 && newTitle === 'Changed') {
                return {title: newTitle, counter: state.counter + 1}
            } else {
                return {
                    title: newTitle, counter: 0
                }
            }
        })
        // this.setState({
        //     title: 'React working ', counter: this.state.counter + 1
        // })
    };

    render() {
        return (
            <div className="App">
                <h1>{this.state.title}</h1>
                <div>
                    <input type="text" onChange={this.inputChangeTitle}/>
                    <button onClick={this.toggleCarsHandler}>Toggle cars</button>
                </div>
                <button onClick={this.changeTitleHandle.bind(this, 'Changed')}>Counter {this.state.counter}</button>
                {
                    this.state.showList
                        ? this.state.cars.map((answer, index) => {
                            return <Car
                                    key={index}
                                    title={answer.title}
                                    name={answer.name}
                                    age={answer.age}
                                    onChangeTitle={this.changeTitleHandle}
                                    onChangeName={(e => {
                                        this.onChangeName(e.target.value, index)
                                    })}
                                    deleteElement={this.deleteElement.bind(this, index)
                                    }
                                    // onChangeTitle={this.changeTitleHandle.bind(this, answer.name)}
                                    // onChangeTitle={() =>{this.changeTitleHandle(answer.name)}}
                                    >  {answer.age > 2016 ? <h4 color={'red'}>Hot price</h4> : ""} </Car>})
                        :
                        null
                }
            </div>
        )
    }
}

export default App;
