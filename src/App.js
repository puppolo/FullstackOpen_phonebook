import { useState, useEffect } from 'react'
import './App.css'

import service from './services/service'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [showErr, setShowErr] = useState(false)

  function hook() {
    /*
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log('promise fulfilled')
        setPersons(res.data)
      })
      */
     service.getAll().then(personData => {
      console.log('get promise fulfilled')
      setPersons(personData)
     })
  }

  useEffect(hook, [])


  function handledSubmit(event) {
    //set alert when there is a duplicated name
    //console.log(persons)
    if (persons.find(person => person['name'] === newName)) {
      //alert
      //window.alert(`${newName} is already added to phonebook`)
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const copy = [...persons]
        const updatePerson = copy.find(person => person['name'] === newName)
        updatePerson.number = newNum
        //update the page
        setPersons(copy)
        //actually update the server
        service.update(updatePerson.id, persons.find(person => person['name'] === newName)).then(console.log('update fulfilled')).catch(error => {
          console.log(error)
          setShowErr(true)
        })
      }
    } else {
      //basic add new item
        //showing/updateing the page
      const copy = [...persons]
      const newId = persons.length + 1
      copy.push({name: newName, number: newNum, id: newId})
      console.log(copy)
      setPersons(copy)
        //actually adding this person to the server
      service.create({name: newName, number: newNum, id: newId}).then(console.log('create promise fulfilled'))
      //showing added message at the top of the page
      setShowAdd(true)
    }

    event.preventDefault()

  }

  function handledDelete(event, id) {
    const removingPerson = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${removingPerson.name}?`)) {
      //re-render the page after delete
      const copy = [...persons]
      setPersons(copy.filter(person => person.id !== id))
      //remove person with id from the server
      service.remove(id).then(console.log('remove promise fulfilled'))
    }
    event.preventDefault()
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {showAdd && <h2 className="notificationAdd" >Added {newName}</h2>}
      {showErr && <h2 className="notificationErr" >Information of {newName} has already been removed from the server</h2>}
      <Filter setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm setNewName={setNewName} setNewNum={setNewNum} handledSubmit={handledSubmit} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handledDelete={handledDelete} />
    </div>
  )
}

export default App
