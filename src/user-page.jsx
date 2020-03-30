import React, { useContext, useReducer, useEffect, useState  } from "react";
import { AppContext } from './index';
import reducer from './reducer';

export const UserPage = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const increase = () => dispatch({ type: 'COUNT_UP' });
    const decrease = () => dispatch({ type: 'COUNT_DOWN' });

    const [personId, setPersonId] = useState('1');
    const findFirst = () => setPersonId('1');
    const findSecond = () => setPersonId('2');

    return (
      <div>
        <div>
          Show:
          <button onClick={findFirst}>Luke</button>
          <button onClick={findSecond}>C-3PO</button>
        </div>
        <Person personId={personId} />
        <br/>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <p>Count: {state.count}</p>
      </div>
    )
}

const usePerson = (personId) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data);
        setLoading(false);
      });
  }, [personId]);  

  return [loading, person];
};


const Person = ({ personId }) => {
    const { username, age } = useContext(AppContext);
    const [loading, person] = usePerson(personId);

    return (loading ? <p>Loading ...</p> :
      <div>
        <p>Hi {username}, you're {age} years old</p>
        <p>You're currently viewing: {person.name}</p>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
      </div>
    );
}