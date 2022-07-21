import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

  function hook() {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log('promise fulfilled')
        setPersons(res.data)
      })
  }

  useEffect(hook, [])


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
