import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import ContactRow from './ContactRow';

const props={ 
      contact: { id: '1', firstName: 'Skyler',  lastName: 'Phillips', deals:['2'], geoIps:['1'], contactTags:['1']},
      deals: [{ id: '2', contact: '1', currency: 'usd', title: 'Skyler\'s Big Deal', value: '10'}],
      tags: [{id: '1', tag: 'tagger'}],
      geoAddress: {id:'1', city:'New York', state:'NY', country:'US' }
  }

it("should render the data properly in a row", () => {

  render(<ContactRow  {...props} />)

  expect(screen.getByText('Skyler Phillips')).toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
  expect(screen.getByText('New York, NY, US')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('tagger')).toBeInTheDocument();
})
