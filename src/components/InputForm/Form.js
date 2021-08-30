
import React, { useState } from 'react';

import Button from '../Button/Button';
import './Form.css';

const Form = props => {
  const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
  const [isValid, setIsValid] = useState(true);

  const UserInputChangeHandlerName = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredName(event.target.value);
    
  };
  const UserInputChangeHandlerAge = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredAge(event.target.value);
    
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddUser(enteredName,enteredAge);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Name</label>
        <input
          style={{
            borderColor: !isValid ? 'red' : '#ccc',
            background: !isValid ? 'salmon' : 'transparent'
          }}
          type="text"
          onChange={UserInputChangeHandlerName}
        />
        
        <label style={{ color: !isValid ? 'red' : 'black' }}>Age</label>
        <input
          style={{
            borderColor: !isValid ? 'red' : '#ccc',
            background: !isValid ? 'salmon' : 'transparent'
          }}
          type="text"
          onChange={UserInputChangeHandlerAge}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default Form;
