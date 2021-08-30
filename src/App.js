import React, { useState } from 'react';
import UserList from '../src/components/UserList/UserList';
import Form from '../src/components/InputForm/Form';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { name: 'Max',age: '30', id: 'g1' },
    { name: 'Mike',age: '20', id: 'g2' }
  ]);

  const addUserHandlerName = (enteredName,enteredAge) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ name: enteredName,age : enteredAge, id: Math.random().toString() });
      return updatedUsers;
    });
  };


  let content = (
    <p style={{ textAlign: 'center' }}>No Users found. Maybe add one?</p>
  );

  if (users.length > 0) {
    content = (
      <UserList items={users} />
    );
  }

  return (
    <div>
      <section id="User-form">
        <Form onAddUser={addUserHandlerName} />
      </section>
      <section id="Users">
        {content}
        {}
      </section>
    </div>
  );
};

export default App;