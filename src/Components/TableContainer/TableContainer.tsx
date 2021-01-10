import React, { useState, useEffect } from 'react';
import ContactsTable from '../ContactsTable/ContactsTable';
import './TableContainer.css';
import Contact from '../../API/interfaces';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts'

const TableContainer = () => {

  const [contacts, setContacts] = useState<Contact[]>([])
  const [error, setError] = useState< Error | null>(null)

  if (error) throw new Error(error.message);

 
  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      "headers": {
        "Api-Token":  process.env.REACT_APP_API_KEY as string
      }
    })
    .then(res => res.json())
    .then(data => {
        setContacts(data.contacts)
      })
    .catch(err => {
        setError(err)
      })
  }, [])

  if (contacts.length > 0) {
      return (
      <div className="table-container">
        <ContactsTable 
          {...{contacts}}
        />
      </div>
    )
  }

   return (
    <div className="d-flex justify-content-center" style={{position: 'absolute', top: '25%', left: '25%', width: '50%'}}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"> Loading... </span>
      </div>
    </div>
  )

  
}

export default TableContainer;