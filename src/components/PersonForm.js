const PersonForm = (props) => {

    const setNewName = props.setNewName
    const setNewNum = props.setNewNum
    const handledSubmit = props.handledSubmit

    return (
        <div>
            <form onSubmit={(e) => handledSubmit(e)}>
                <div>
                    Name: <input onChange={e => setNewName(e.target.value)} />
                </div>
                <div>
                    Number: <input onChange={e => setNewNum(e.target.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm