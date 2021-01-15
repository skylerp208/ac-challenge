import React from 'react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react';
import TableContainer from './TableContainer';

const API_URL = 'https://thingproxy.freeboard.io/fetch/https://sahmed93846.api-us1.com/api/3/contacts?include=contactTags.tag,deals,geoIps.geoAddress'

console.error = jest.fn()

const server = setupServer(
  rest.get(API_URL, (req, res, ctx) => {
    return res(ctx.json({ 
      contacts: [{ firstName: 'Skyler',  lastName: 'Phillips', deals:['1'], geoIps:['1'], contactTags:['1']}],
      contactTags:  [{id: '1', contact: '1'}],
      deals: [{ currency: 'usd', title: 'Skyler\'s big deal', value: '10'}],
      tags: [{id: '1', tag: 'tagger'}],
      geoIps: [{contact: '1', geoAddress: '1'}],
      geoAddresses:[{id:'1', city:'New York', state:'NY', country:'US' }]
    }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


it('should render table after contacts are fetched', async () => {
  render(<TableContainer />)

  expect(screen.getByTestId('spinner')).toBeInTheDocument();

  await waitFor(() => screen.getByTestId('table-container'))
  expect(screen.getByTestId('table-container')).toBeInTheDocument();
})



