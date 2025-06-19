const Hello = (props) => {
  console.log(props)
  
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
    <div>
      <p>Hello chat, it is now {now.toString()}</p>
      <Hello name='ee'/>
    </div>
  )
}

export default App