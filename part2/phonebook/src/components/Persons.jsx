import PhonebookEntry from "./PhonebookEntry"

const Persons = ({personsList, removalFunc}) => 
  {
    return (<p>
      {personsList.map((person) => <PhonebookEntry 
        name={person.name} 
        number={person.number} 
        key={person.name}
        remove={() => removalFunc(person.id)}
      />)}
    </p>)
  }

export default Persons