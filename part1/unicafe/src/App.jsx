import { useState } from 'react'

const Button = ({event, text}) => <button onClick={event}>{text}</button>

const Header = () => <h1>give feedback</h1>

const StatLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total == 0) {
    return ( 
      <div>
        <h1>statistics</h1>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  return ( 
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatLine text="good" value={good} />
          <StatLine text="neutral" value={neutral} />
          <StatLine text="bad" value={bad} />
          <StatLine text="all" value={total} />
          <StatLine text="average" value={(good - bad) / total} />
          <StatLine text="positive" value={good / total} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Button event={() => setGood(good + 1)} text="good" />
      <Button event={() => setNeutral(neutral + 1)} text="neutral" />
      <Button event={() => setBad(bad + 1)} text="bad" />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App