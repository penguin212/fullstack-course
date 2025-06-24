import { useState } from 'react'
import PhonebookEntry from './components/PhonebookEntry'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "2" },
    { name: 'Artur', number: "4" },
    { name: 'John', number: "12" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredList = filter === "" 
    ? persons 
    : persons.filter((person) => 
      person.name.toLowerCase().includes(filter.toLowerCase()))

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
      <p>filter with <input value={filter} onChange={handleFilterChange}/></p>
      <h3>add new</h3>
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
        {filteredList.map((person) => <PhonebookEntry 
          name={person.name} 
          number={person.number} 
          key={person.name}
        />)}
      </p>
      
    </div>
  )
}

export default App