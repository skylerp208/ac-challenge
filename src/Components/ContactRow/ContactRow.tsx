import React from 'react';
import  './ContactRow.css'

interface Contact {
  firstName: string,
  lastName: string,
  email: string,
  phone: string
}

interface Props {
  contact: Contact
}

const ContactRow = (props: Props) => {
  let { contact } = props;
  return (
      <tr className="contact-row">
        <td className="contact-name"> 
          <span className="profile"> {`${contact.firstName[0]}${contact.lastName[0]}`} </span>
          {`${contact.firstName} ${contact.lastName}`} 
        </td>
        <td> {contact.email} </td>
        <td> {contact.phone} </td>
      </tr>
    )
}

export default ContactRow;