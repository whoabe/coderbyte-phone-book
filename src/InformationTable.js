import React from "react";

const InformationTable = ({ sortedContacts }) => {
  return (
    <table className="informationTable">
      <thead>
        <tr>
          <th className="tableCell">First name</th>
          <th className="tableCell">Last name</th>
          <th className="tableCell">Phone</th>
        </tr>
        {sortedContacts &&
          sortedContacts.map((contact) => (
            <tr key={contact.id}>
              <th className="tableCell">{contact.firstName}</th>
              <th className="tableCell">{contact.lastName}</th>
              <th className="tableCell">{contact.phone}</th>
            </tr>
          ))}
        {/* {sortedContacts && {sortedContacts.map(contact) => (
            <tr key={contact.id}>
              <th style={style.tableCell}>{contact.firstName}</th>
              <th style={style.tableCell}>{contact.lastName}</th>
              <th style={style.tableCell}>{contact.phone}</th>
            </tr>
          )}} */}
      </thead>
    </table>
  );
};

export default InformationTable;
