import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
)
const Statistics = ({ text, value, unit }) => {
    if ( (value===0) && ( text==='all')) {
        return (
            <tr><td>No feedback was given</td></tr>
        )
    } else if (value > 0) {
        return (
            <tr>
                <td>{text}</td>
                <td >{value}</td>
                <td >{unit}</td>
            </tr>
        )
    }
    return null

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
            <table>
                <tbody>
                    <Statistics text="good" value={good} />
                    <Statistics text="neutral" value={neutral} />
                    <Statistics text="bad" value={bad} />
                    <Statistics text="all" value={all} />
                    <Statistics text="average" value={(good-bad) / all } />
                    <Statistics text="positive" value={good / all * 100}unit="%"/>
                </tbody>
            </table>

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

