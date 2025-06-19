const Header = (props) => {
  return(
    <>
      <h1>{props.coursename}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.num}</p>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <Part name={props.name1} num={props.num1} />
      <Part name={props.name2} num={props.num2} />
      <Part name={props.name3} num={props.num3} />
    </>
  )
}

const Footer = (props) => {
  return(
    <>
      <p>Number of exercises {props.total}</p>
    </>
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
      <Header coursename={course}/>
      <Content name1={part1} name2={part2} name3={part3} num1={exercises1} num2={exercises2} num3={exercises3} />
      <Footer total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App