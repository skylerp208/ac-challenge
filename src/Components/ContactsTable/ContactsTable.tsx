import React from 'react';
import ContactRow from '../ContactRow/ContactRow';
import './ContactsTable.css';

interface contactProps {
  contacts: any[];
}

const HEADERS = ['Contact', 'Email', 'Phone Number']

const ContactsTable = ({contacts} : contactProps) => {

  let contactsArr: any[] = contacts.map(c => {
    return <ContactRow contact={c} key={c.id} />
  })
 
  return (
    <div>
      <table className="contacts-table">
        <thead>
          <tr>
            {HEADERS.map((header, idx) => <th key={idx}> {header} </th>)}
          </tr>
        </thead>
        <tbody>
          {contactsArr}
        </tbody>
      </table>
    </div>
  )
}

export default ContactsTable;