import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')


  function handledSubmit(event) {
    //set alert when there is a duplicated name
    //console.log(persons)
    if (persons.find(person => person['name'] === newName)) {
      //alert
      window.alert(`${newName} is already added to phonebook`)
    } else {
      //basic add new item
      const copy = [...persons]
      const newId = persons.length + 1
      copy.push({name: newName, number: newNum, id: newId})
      console.log(copy)
      setPersons(copy)
    }

    event.preventDefault()

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm setNewName={setNewName} setNewNum={setNewNum} handledSubmit={handledSubmit} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App
