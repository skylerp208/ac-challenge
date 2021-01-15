import React, { useState, useEffect } from 'react';
import ContactsTable from '../ContactsTable/ContactsTable';
import './TableContainer.css';
import { Contact, ContactTag, Deal,  GeoAddress, GeoIps, Tag} from '../../API/interfaces';
import axios from 'axios';

// the first thing i did was forget my dependency array in my useffect
// and max out my cors-anywhere limit for the hour. so i switched to thingproxy
const API_URL = 'https://thingproxy.freeboard.io/fetch/https://sahmed93846.api-us1.com/api/3/contacts?include=contactTags.tag,deals,geoIps.geoAddress'

interface TableState {
  contacts:  Contact[],
  contactTags: ContactTag[],
  deals: Deal[],
  tags: Tag[],
  geoIps: GeoIps[],
  geoAddresses:  GeoAddress[]
}

const TableContainer = () => {
  const [state, setState] = useState<TableState>({
    contacts:  [],
    contactTags:[],
    deals: [],
    tags: [],
    geoIps: [],
    geoAddresses: []
  })
  const [error, setError] = useState< Error | null>(null)
  const { contacts } = state;

  if (error) throw new Error(error.message);

  useEffect(() => {
    // for fetching the contacts, I wasn't sure which was better:
    // sideloading all the relevant data and then matching it up,
    // or doing an api call for each contact later using either their
    // id or the links in the list all contacts call. I decided
    // to do the sideloading, since it would just be 1 api call.
    const fetchContacts = async () => {
      try {
        const result = await axios({
          method: 'GET',
          url: API_URL,
          headers: {
            "Api-Token": process.env.REACT_APP_API_KEY as string
          }
        })
        setState(result.data)
      } catch (err) {
        setError(err)
      }
    }

    fetchContacts()
  }, [])

  if (contacts.length > 0) {
      return (
      <div data-testid="table-container" className="table-container">
        <ContactsTable 
          {...state}
        />
      </div>
    )
  }

  return (
    <div data-testid="spinner" className="d-flex justify-content-center" style={{position: 'absolute', top: '25%', left: '25%', width: '50%'}}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"> Loading... </span>
      </div>
    </div>
  )

}

export default TableContainer;