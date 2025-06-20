import { useState } from 'react'

const Button = ({event, text}) => <button onClick={event}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [maxCount, setMaxCount] = useState(0)
  const [maxIdx, setMaxIdx] = useState(0)


  const addVote = (idx) => () => {
    const copy = { ...votes}
    copy[idx] += 1
    if (copy[idx] > maxCount){
      console.log("true")
      setMaxCount(copy[idx])
      setMaxIdx(idx)
    }
    setVotes(copy)
  }

  console.log(maxCount)
  

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <Button event={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote"/>
      <Button event={addVote(selected)} text="vote" />
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[maxIdx]} <br /> with {maxCount} votes</p>
    </div>
  )
}

export default App