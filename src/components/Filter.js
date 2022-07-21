const Filter = (props) => {

    const setFilter = props.setFilter
    
    return (
        <div>
            filter shown with <input onChange={e => setFilter(e.target.value)} />
        </div>
    )
}

export default Filter