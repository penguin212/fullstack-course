const PhonebookEntry = ({name, number, remove}) => {
    return (<>{name} {number} <button type="button" onClick={remove}> delete </button> <br/></>)
}

export default PhonebookEntry