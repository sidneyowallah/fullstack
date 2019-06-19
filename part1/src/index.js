import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Part = (props) => {
    return (
        <div>
            {props.Part1} {props.Exercises1}
            {props.Part2} {props.Exercises2}
            {props.Part3} {props.Exercises3}
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part Part1={props.Part1} Exercises1={ props.Exercises1}/>
            <Part Part2={props.Part2} Exercises2={ props.Exercises2}/>
            <Part Part3={props.Part3} Exercises3={ props.Exercises3}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content  Part1={part1}  Exercises1={exercises1}  Part2={part2} Exercises2={exercises2} Part3={part3} Exercises3={exercises3}/>
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        </div>
    )
  }
ReactDOM.render(<App />, document.getElementById('root'));

