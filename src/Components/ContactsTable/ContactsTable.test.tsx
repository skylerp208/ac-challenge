import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import ContactsTable from './ContactsTable';


const props={ 
      contacts: [{ id: '1', firstName: 'Skyler',  lastName: 'Phillips', deals:['2'], geoIps:['1'], contactTags:['1']}],
      contactTags:  [{id: '1', tag:'1', contact: '1'}],
      deals: [{ id: '2', contact: '1', currency: 'usd', title: 'Skyler\'s Big Deal', value: '10'}],
      tags: [{id: '1', tag: 'tagger'}],
      geoIps: [{id: '1', geoAddress: '1'}],
      geoAddresses:[{id:'1', city:'New York', state:'NY', country:'US' }]
    }

afterEach(cleanup)

it('should render a table with all the headers', () => {
  render(<ContactsTable {...props} />)

  expect(screen.getByText('Contact'))
  expect(screen.getByText('Total Value'))
  expect(screen.getByText('Location'))
  expect(screen.getByText('Deals'))
  expect(screen.getByText('Tags'))

})

it('should render a table with the right amount of rows', () => {
  const { contacts } = props;

  render(<ContactsTable {...props} />)
  
  expect(screen.getAllByTestId('contact-row')).toHaveLength(contacts.length)
})