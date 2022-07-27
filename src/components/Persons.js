const Persons = (props) => {

    const persons = props.persons
    const filter = props.filter
    const handledDelete = props.handledDelete
    return (
        <div>
            {persons.filter((person) => person.name.includes(filter)).map((person) => <div key={person.id} >{person.name} {person.number} <button onClick={(e) => handledDelete(e, person.id)}>delete</button></div>)}
        </div>
    )
}

export default Persons