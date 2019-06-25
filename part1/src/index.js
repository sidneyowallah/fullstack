import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = (props) => {

    const [selected, setSelected] = useState(0)

    const [votes, setVotes] = useState(new Array(6).fill(0))


    const setToSelected = () => {
        let randomNum = Math.floor(Math.random() * 6);
        setSelected(randomNum)
    }

    const setTheVotes = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    const mostVotes = Math.max(...votes);

    const bestAnecdote = props.anecdotes[votes.indexOf(mostVotes)]

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{props.anecdotes[selected]}<br />has {votes[selected]} votes</div>
            <Button onClick={setTheVotes} text="vote" />
            <Button onClick={() => setToSelected(selected)} text="next anecdote" />

            <h1>Anecdote with most Votes</h1>

            <div>{bestAnecdote}<br />has {mostVotes} votes</div>
        </div>
    )
}

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

