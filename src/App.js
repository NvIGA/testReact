import React, {Component} from 'react'
import Car from './Car'
import './App.scss'
import withClass from './hoc/withClass'
import Counter from "./Counter/Counter";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);

        this.state = {
            cars: [
                {name: "Ford", age: 2015},
                {name: "Audi", age: 2017},
                {name: "Lexus", age: 2016},
                {name: "Mazda", age: 2018},
                {name: "Toyota", age: 2011},
                {name: "Porsche", age: 2016},
                {name: "Ferrari", age: 2014}
            ],
            title: "React component",
            counter: 1,
            showList: false
        }
    }


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

    componentDidMount() {
        console.log('componentDidMount')
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps, nextState, nextContext);
        return true;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps ', nextProps, prevState);
        return prevState
    }


    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return prevState
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


    render() {
        // if(Math.random() > 0.9){
        //     throw new Error('Car random failed')
        // }
        console.log('render');
        return (
            <div className='App'>
                <h1>{this.state.title}</h1>
                <Counter/>
                <React.Fragment>
                    <input type="text" onChange={this.inputChangeTitle}/>
                    <button className='AppButton' onClick={this.toggleCarsHandler}>Toggle cars</button>
                </React.Fragment>
                <button onClick={this.changeTitleHandle.bind(this, 'Changed')}>Counter {this.state.counter}</button>

                {
                    this.state.showList
                        ? this.state.cars.map((answer, index) => {
                            return (
                                <ErrorBoundary key={index} ><Car
                                    index={index}
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
                                >  {answer.age > 2016 ? <h4 color={'red'}>Hot price</h4> : ""} </Car>
                                </ErrorBoundary>)
                        })
                        :
                        null
                }
            </div>
        )
    }
}

export default withClass(App, 'App');
