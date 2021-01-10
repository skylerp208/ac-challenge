import React, { useState, useEffect } from 'react';
import ContactsTable from '../ContactsTable/ContactsTable';
import './TableContainer.css';
import Contact from '../../API/interfaces';

const API_URL = 'https://thingproxy.freeboard.io/fetch/https://sahmed93846.api-us1.com/api/3/contacts'

const TableContainer = () => {

  const [contacts, setContacts] = useState<Contact[]>([])
 
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
        console.log('error message: ', err.message);
        // if a i throw an error here, error boundary doesnt catch it
        throw new Error('async error!')
      })
  }, [])

  

  return (
    <div className="table-container">
      <ContactsTable 
        {...{contacts}}
      />
    </div>
  )
}

export default TableContainer;