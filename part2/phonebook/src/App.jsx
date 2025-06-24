import { useState } from 'react'
import PhonebookEntry from './components/PhonebookEntry'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "2" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAddName = (event) => {
    event.preventDefault()
    if(persons.filter((person) => person.name === newName).length > 0){
      alert(`${newName} is already added to the phonebook`)
      return
    }
    if(persons.filter((person) => person.number === newNumber).length > 0){
      alert(`The number ${newNumber} is already added to the phonebook`)
      return
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(nameObject))
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>
        {persons.map((person) => <PhonebookEntry 
          name={person.name} 
          number={person.number} 
          key={person.name}
        />)}
      </p>
      
    </div>
  )
}

export default App