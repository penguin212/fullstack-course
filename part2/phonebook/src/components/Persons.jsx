import PhonebookEntry from "./PhonebookEntry"

const Persons = ({personsList}) => 
  {
    return (<p>
      {personsList.map((person) => <PhonebookEntry 
        name={person.name} 
        number={person.number} 
        key={person.name}
      />)}
    </p>)
  }

export default Persons