import React, { useState } from "react";
import "./App.css";
import PhoneBookForm from "./PhoneBookForm";
import InformationTable from "./InformationTable";

function App() {
  const initialContacts = [
    { firstName: "Abe", lastName: "Lincoln", phone: 1111111111, id: 0 },
    { firstName: "Teddy", lastName: "Roosevelt", phone: 3333333333, id: 2 },
    { firstName: "George", lastName: "Washington", phone: 2222222222, id: 1 },
  ];
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  };

  return (
    <section>
      <PhoneBookForm addContact={addContact} />
      <InformationTable contacts={contacts} />
    </section>
  );
}

export default App;
