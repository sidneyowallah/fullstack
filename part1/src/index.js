import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistic = ({ text, value }) => <tr><td>{text}: {value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = ((good / all) * 100) + " %"

    if (all === 0) {
        return <p>No feedback was given</p>
    }
    return (
         <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="all" value={all} />
                    <Statistic text="average" value={average} />
                    <Statistic text="positive" value={positive} />
                </tbody>
        </table>
    )
}

const App = (props) => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const handleGoodClick = () => {
        setAll(all +1)
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setAll(all +1)
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setAll(all +1)
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text='good' />
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

