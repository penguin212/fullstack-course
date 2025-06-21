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

const Content = ({parts}) => {
  return(
    <>
      {parts.map((part) => <Part key={part.id} name={part.name} num={part.exercises} />)}
    </>
  )
}

const Footer = ({parts}) => {
  return(
    <>
      <p><b>Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}</b></p>
    </>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header coursename={course.name}/>
      <Content parts={course.parts} />
      <Footer parts={course.parts}/>
    </div>
  )
}

export default Course