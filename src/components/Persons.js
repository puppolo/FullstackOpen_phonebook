const Persons = (props) => {

    const persons = props.persons
    const filter = props.filter

    return (
        <div>
            {persons.filter((person) => person.name.includes(filter)).map((person) => <div key={person.id} >{person.name} {person.number}</div>)}
        </div>
    )
}

export default Persons