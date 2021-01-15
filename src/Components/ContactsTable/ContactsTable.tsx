import React from 'react';
import ContactRow from '../ContactRow/ContactRow';
import './ContactsTable.css';
import { Contact, Deal,  GeoAddress, GeoIps, ContactTag, Tag } from '../../API/interfaces';

interface contactProps {
  contacts: Contact[];
  contactTags: ContactTag[];
  geoIps: GeoIps[];
  deals: Deal[];
  geoAddresses: GeoAddress[];
  tags:  Tag[];
}

const HEADERS = ['Contact', 'Total Value', 'Location',  'Deals', 'Tags']

const ContactsTable = ({contacts, contactTags, deals, geoIps, geoAddresses, tags}: contactProps) => {
  //just matching everything from the API up real quick
  let contactsArr = contacts.map(c => {
    let dArr = deals.filter(d  => c.deals.includes(d.id));
    
    let cTagArr = contactTags.filter(ct => c.contactTags.includes(ct.id)).map(ct  =>  ct.tag)
    let tagArr  = tags.filter(t => cTagArr.includes(t.id))
    
    let geoIpsArr = geoIps.filter(g => c.geoIps.includes(g.id)).map(g => g.geoAddress)
    let geoAddArr =  geoAddresses.filter(g =>  geoIpsArr.includes(g.id))
    
    return <ContactRow contact={c} key={c.id} deals={dArr} tags={tagArr} geoAddress={geoAddArr[0]} />
  })

  return (
    <table data-testid="contacts-table" className="contacts-table">
      <thead>
        <tr>
          {HEADERS.map((header, idx) => <th key={idx}> {header} </th>)}
        </tr>
      </thead>
      <tbody>
        {contactsArr}
      </tbody>
    </table>
  )
 
}

export default ContactsTable;