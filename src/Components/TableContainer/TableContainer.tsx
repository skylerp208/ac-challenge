import React, { useState, useEffect } from 'react';
import ContactsTable from '../ContactsTable/ContactsTable';
import './TableContainer.css'

const TableContainer = () => {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts', {
      method: "GET",
      "headers": {
        "Api-Token":  process.env.REACT_APP_API_KEY as string
      }
    })
    .then(res => {
      res.json()
      .then(data => {
        setContacts(data.contacts)
      })
      .catch(err => {
        console.log(err);
      })
    })
  }, [])

  

  return (
    <div className="table-container">
      <ContactsTable 
        contacts = {contacts}
      />
    </div>
  )
}

export default TableContainer;