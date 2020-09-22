import React, { useState } from "react";

const InformationTable = ({ contacts }) => {
  const [sortDirection, setSortDirection] = useState(1);
  const toggleSortDirection = () => {
    setSortDirection(sortDirection * -1);
  };
  const [currentSortColumn, setCurrentSortColumn] = useState("lastName");

  const handleChangeCurrentSortCol = (colName) => (e) => {
    e.preventDefault();
    setCurrentSortColumn(colName);
    toggleSortDirection();
  };

  const sortedContacts = contacts.sort((a, b) => {
    var propA, propB;
    if (currentSortColumn === "phone") {
      propA = a[currentSortColumn.toString()];
      propB = b[currentSortColumn.toString()];
    } else {
      propA = a[currentSortColumn].toLowerCase();
      propB = b[currentSortColumn].toLowerCase();
    }
    return sortDirection * (propA < propB ? -1 : propB < propA ? 1 : 0);
  });

  return (
    <table className="informationTable">
      <thead>
        <tr>
          <th className="tableCell">
            <div className="tableHeader">
              <span>First Name</span>
              <span
                onClick={handleChangeCurrentSortCol("firstName")}
                className="sortDirection"
              >
                <span
                  className="arrowUp"
                  style={{
                    borderBottomColor:
                      sortDirection === 1 && currentSortColumn === "firstName"
                        ? "#333"
                        : "#999",
                  }}
                />
                <span
                  className="arrowDown"
                  style={{
                    borderTopColor:
                      sortDirection === -1 && currentSortColumn === "firstName"
                        ? "#333"
                        : "#999",
                  }}
                />
              </span>
            </div>
          </th>
          <th className="tableCell">
            <div className="tableHeader">
              <span>Last Name</span>
              <span
                onClick={handleChangeCurrentSortCol("lastName")}
                className="sortDirection"
              >
                <span
                  className="arrowUp"
                  style={{
                    borderBottomColor:
                      sortDirection === 1 && currentSortColumn === "lastName"
                        ? "#333"
                        : "#999",
                  }}
                />
                <span
                  className="arrowDown"
                  style={{
                    borderTopColor:
                      sortDirection === -1 && currentSortColumn === "lastName"
                        ? "#333"
                        : "#999",
                  }}
                />
              </span>
            </div>
          </th>
          <th className="tableCell">
            <div className="tableHeader">
              <span>Phone</span>
              <span
                onClick={handleChangeCurrentSortCol("phone")}
                className="sortDirection"
              >
                <span
                  className="arrowUp"
                  style={{
                    borderBottomColor:
                      sortDirection === 1 && currentSortColumn === "phone"
                        ? "#333"
                        : "#999",
                  }}
                />
                <span
                  className="arrowDown"
                  style={{
                    borderTopColor:
                      sortDirection === -1 && currentSortColumn === "phone"
                        ? "#333"
                        : "#999",
                  }}
                />
              </span>
            </div>
          </th>
        </tr>
        {sortedContacts &&
          sortedContacts.map((contact) => (
            <tr key={contact.id}>
              <th className="tableCell">{contact.firstName}</th>
              <th className="tableCell">{contact.lastName}</th>
              <th className="tableCell">{contact.phone}</th>
            </tr>
          ))}
      </thead>
    </table>
  );
};

export default InformationTable;
