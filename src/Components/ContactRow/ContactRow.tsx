import React from 'react';
import  './ContactRow.css'
import Contact from '../../API/interfaces';

interface Props {
  contact: Contact;
}

const ContactRow = ( {contact} : Props) => {
  const { firstName, lastName, email, phone } = contact;

  return (
      <tr className="contact-row">
        <td className="contact-name"> 
          <span className="profile"> {`${firstName[0]}${lastName[0]}`} </span>
          {`${firstName} ${lastName}`} 
        </td>
        <td> {email} </td>
        <td> {phone} </td>
      </tr>
    )
}

export default ContactRow;