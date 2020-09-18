import React, { useState } from "react";
import "./App.css";
import PhoneBookForm from "./PhoneBookForm";
import InformationTable from "./InformationTable";

function App() {
  const initialContacts = [
    { firstName: "Coder", lastName: "Byte", phone: 8885559999, id: 0 },
  ];
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  };

  const sortedContacts = (contacts) => {
    return contacts.sort(function (a, b) {
      if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
        console.log("-1");
        return -1;
      }
      if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
        console.log("1");
        return 1;
      }
      console.log("0");
      return 0;
    });
  };

  return (
    <section>
      <PhoneBookForm addContact={addContact} />
      <InformationTable sortedContacts={sortedContacts(contacts)} />
    </section>
  );
}

export default App;
