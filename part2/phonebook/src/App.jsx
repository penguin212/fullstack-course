import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import { useEffect } from 'react'
import personService from './services/person'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

    personService
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewNumber("")
      })
    
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      
      <h3>add new</h3>

      <PersonForm 
        handleAddName={handleAddName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons personsList={filteredList} />
      
    </div>
  )
}

export default App