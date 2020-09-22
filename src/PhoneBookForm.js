import React, { useState } from "react";

const PhoneBookForm = ({ addContact }) => {
  const initialFormState = {
    id: null,
    firstName: "",
    lastName: "",
    phone: "",
  };

  const [formContact, setFormContact] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormContact({ ...formContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formContact.firstName || !formContact.lastName || !formContact.phone) {
      return;
    }
    addContact(formContact);
    setFormContact(initialFormState);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>First name:</label>
      <br />
      <input
        className="userFirstname"
        name="firstName"
        type="text"
        value={formContact.firstName}
        onChange={handleInputChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        className="userLastname"
        name="lastName"
        type="text"
        value={formContact.lastName}
        onChange={handleInputChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        className="userPhone"
        name="phone"
        type="text"
        value={formContact.phone}
        onChange={handleInputChange}
      />
      <br />
      <input className="submitButton" type="submit" value="Add User" />
    </form>
  );
};
export default PhoneBookForm;
