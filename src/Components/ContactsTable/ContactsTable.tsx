import React from 'react';
import ContactRow from '../ContactRow/ContactRow';
import './ContactsTable.css';

interface contactProps {
  contacts: any[];
}

const ContactsTable = (props: contactProps) => {

  let contactsArr: any[] = props.contacts.map(c => {
    return <ContactRow contact={c} key={c.id} />
  })

  return (
      <table className="contacts-table">
        <thead>
          <tr className="table-header">
            <th> Contact </th>
            <th> Email </th>
            <th> Phone Number </th>
          </tr>
        </thead>
        <tbody>
          {contactsArr}
        </tbody>
      </table>
  )
}

export default ContactsTable;